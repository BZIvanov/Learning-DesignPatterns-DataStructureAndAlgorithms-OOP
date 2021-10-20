const router = require('express').Router();
const {
  getPostComments,
  createPostComment,
  incomingEvent,
} = require('../controllers');

router
  .route('/posts/:id/comments')
  .get(getPostComments)
  .post(createPostComment);
router.route('/events').post(incomingEvent);

module.exports = router;
