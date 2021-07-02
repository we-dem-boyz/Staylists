const router = require('express').Router();
const { Playlist, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    const playlistData = await Playlist.findAll({
      include: [
        {
          model: Playlist,
          attributes: ['name', 'description'],
        },
      ],
    });
  
      // Serialize data so the template can read it
    const playlists = playlistData.map((playlist) => playlist.get({ plain: true }));
  
    res.render('homepage', { 
      playlists, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/project/:id', async (req, res) => {
  try {
    const userData = await User.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['name', 'description'],
        },
      ],
    });

    const user = userData.get({ plain: true });

    res.render('user', {
      ...user,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/profile', withAuth, async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Playlist }],
    });

    const user = userData.get({ plain: true });

    res.render('profile', {
      ...user,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

// const users = userData.map((user) => user.get({ plain: true }));
  
//   res.render('homepage', { 
//     users, 
//     logged_in: req.session.logged_in 
//   });
//   catch (err) {
//     res.status(500).json(err);
//   }

module.exports = router;
  