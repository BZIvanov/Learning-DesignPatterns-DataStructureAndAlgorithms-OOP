const Post = require('../models/post');
const Comment = require('../models/comment');

const handleEvent = async (type, data) => {
  if (type === 'PostCreated') {
    const { _id, title } = data;
    await Post.create({ _id, title });
  }

  if (type === 'CommentCreated') {
    const { _id, postId, content, status } = data;

    await Comment.create({ _id, content, postId, status });
  }

  if (type === 'CommentUpdated') {
    const { _id, content, status } = data;

    await Comment.findByIdAndUpdate(
      _id,
      { status, content },
      {
        new: true,
        runValidators: true,
      }
    );
  }
};

exports.handleEvent = handleEvent;

exports.getPosts = async (req, res) => {
  try {
    const posts = await Post.find().populate('comments');

    res.status(200).json(posts);
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false });
  }
};

exports.incomingEvent = async (req, res) => {
  try {
    const { type, data } = req.body;

    await handleEvent(type, data);

    res.status(200).json({ success: true });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false });
  }
};
