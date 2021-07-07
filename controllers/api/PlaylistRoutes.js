const router = require('express').Router();
const { Playlist } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', withAuth, async (req, res) => {
    try {
        const dbplaylistData = await Playlist.findAll({
            include: [
                {
                    model: Playlist,
                    attributes: ['name', 'description'],
                }
            ]
        });
    } catch (err) {
        res.status(400).json(err);
    }
});

router.post('/', withAuth, async (req, res) => {
    try {
        const newplaylist = await Playlist.create({
            ...req.body,
            user_id: req.session.user_id,
        });

        res.status(200).json(newplaylist);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.delete('/:id', withAuth, async (req, res) => {
    try {
      const playlistData = await Playlist.destroy({
        where: {
          id: req.params.id,
          user_id: req.session.user_id,
        },
      });
  
      if (!playlistData) {
        res.status(404).json({ message: 'No Playlist found with this id!' });
        return;
      }
  
      res.status(200).json(PlaylistData);
    } catch (err) {
      res.status(500).json(err);
    }
});

module.exports = router;
