const router = require('express').Router();
const { getPosts, createPost, incomingEvent } = require('../controllers');

router.route('/posts').get(getPosts).post(createPost);
router.route('/events').post(incomingEvent);

module.exports = router;
