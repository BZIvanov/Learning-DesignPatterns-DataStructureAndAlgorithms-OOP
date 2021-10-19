const axios = require('axios');
const Event = require('../models/event');

exports.getEvents = async (req, res) => {
  try {
    const events = await Event.find();

    res.status(200).json(events);
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false });
  }
};

exports.createEvent = async (req, res) => {
  try {
    const { type, data } = req.body;
    const event = await Event.create({ type, data });

    axios.post('http://localhost:5000/events', event);
    axios.post('http://localhost:5001/events', event);
    axios.post('http://localhost:5002/events', event);
    axios.post('http://localhost:5003/events', event);

    res.status(201).json({ success: true });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false });
  }
};
