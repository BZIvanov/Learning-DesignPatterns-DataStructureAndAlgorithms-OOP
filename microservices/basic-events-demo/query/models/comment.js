const { Schema, model } = require('mongoose');

const schema = new Schema(
  {
    postId: {
      type: Schema.Types.ObjectId,
      ref: 'Post',
      required: true,
    },
    content: {
      type: String,
      required: [true, 'Content is required'],
    },
    status: {
      type: String,
      required: [true, 'Status is required'],
      enum: ['pending', 'approved', 'rejected'],
    },
  },
  { timestamps: true }
);

module.exports = model('Comment', schema);
