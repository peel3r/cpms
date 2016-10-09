var router = require('express').Router();

// api router will mount other routers
// for all our resources
router.use('/users', require('./user/userRoutes'));
router.use('/diaries', require('./diary/diaryRoutes'));
router.use('/categories', require('./category/categoryRoutes'));
router.use('/posts', require('./post/postRoutes'));
router.use('/pains', require('./pain/painRoutes'));
router.use('/esas', require('./esa/esaRoutes'));
router.use('/answer', require('./answer/answerRoutes'));

module.exports = router;
