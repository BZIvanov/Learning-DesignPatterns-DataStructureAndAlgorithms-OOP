const axios = require('axios');
const Post = require('../models/post');

exports.getPosts = async (req, res) => {
  try {
    const posts = await Post.find();

    res.status(200).json(posts);
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false });
  }
};

exports.createPost = async (req, res) => {
  try {
    const { title } = req.body;
    const post = await Post.create({ title });

    await axios.post('http://localhost:5005/events', {
      type: 'PostCreated',
      data: post,
    });

    res.status(201).json(post);
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false });
  }
};

exports.incomingEvent = (req, res) => {
  console.log('Received Event', req.body.type);

  res.status(200).json({ success: true });
};
