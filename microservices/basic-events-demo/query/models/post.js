const { Schema, model } = require('mongoose');

const schema = new Schema(
  {
    title: {
      type: String,
      required: [true, 'Title is required'],
    },
  },
  { timestamps: true }
);

schema.virtual('comments', {
  ref: 'Comment',
  localField: '_id',
  foreignField: 'postId',
  justOne: false,
});

module.exports = model('Post', schema);
