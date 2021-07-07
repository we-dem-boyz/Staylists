const router = require('express').Router();
const PlaylistRoutes = require('./PlaylistRoutes');
const userRoutes = require('./userRoutes');

//const apiRoutes = require('../api');

router.use('/', PlaylistRoutes);
router.use('/', userRoutes);
//router.use('/api', apiRoutes);

module.exports = router;
