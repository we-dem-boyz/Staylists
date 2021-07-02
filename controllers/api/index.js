const router = require('express').Router();
const projectRoutes = require('./projectRoutes');
const userRoutes = require('./userRoutes');

const apiRoutes = require('./api');

router.use('/', projectRoutes);
router.use('/', userRoutes);
router.use('/api', apiRoutes);

module.exports = router;
