const router = require('express').Router();
const { getPosts, incomingEvent } = require('../controllers');

router.route('/posts').get(getPosts);
router.route('/events').post(incomingEvent);

module.exports = router;
