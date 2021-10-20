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

module.exports = model('Post', schema);
