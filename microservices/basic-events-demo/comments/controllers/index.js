const axios = require('axios');
const Comment = require('../models/comment');

exports.getPostComments = async (req, res) => {
  try {
    const comments = await Comment.find({ postId: req.params.id });

    res.status(200).json(comments);
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false });
  }
};

exports.createPostComment = async (req, res) => {
  try {
    const { content } = req.body;
    const comment = await Comment.create({
      postId: req.params.id,
      content,
      status: 'pending',
    });

    await axios.post('http://localhost:5005/events', {
      type: 'CommentCreated',
      data: comment,
    });

    res.status(201).json(comment);
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false });
  }
};

exports.incomingEvent = async (req, res) => {
  console.log('Received Event', req.body.type);

  const { type, data } = req.body;

  if (type === 'CommentModerated') {
    const { _id, status } = data;

    const comment = await Comment.findByIdAndUpdate(
      _id,
      { status },
      {
        new: true,
        runValidators: true,
      }
    );

    await axios.post('http://localhost:5005/events', {
      type: 'CommentUpdated',
      data: comment,
    });
  }

  res.status(200).json({ success: true });
};
