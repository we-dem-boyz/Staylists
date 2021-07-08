const router = require('express').Router();
const { Playlist, Song } = require ('../../models')
const withAuth = require ('../../utils/auth')

router.post('/', withAuth, async (req, res) => {
    try {
        const addSong = await Playlist.push({
            ...req.body,
            Song_id: req.session.Song_id,
        });

        if (!Playlist) {
        res.status(404).json({ message: 'No Playlist found' });
        return;
        }
    } catch (err) {
        res.status(400).json(err);
    }
});
