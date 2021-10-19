const { Schema, model } = require('mongoose');

const schema = new Schema(
  {
    type: {
      type: String,
      trim: true,
      required: [true, 'Event type is required'],
    },
    data: { type: Object },
  },
  { timestamps: true }
);

module.exports = model('Event', schema);
