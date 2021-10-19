require('dotenv').config();
const express = require('express');
const axios = require('axios');

const app = express();

app.use(express.json());

const events = [];

app.get('/events', (req, res) => {
  res.status(200).json(events);
});

app.post('/events', (req, res) => {
  const event = req.body;

  events.push(event);

  axios.post('http://localhost:5000/events', event);
  axios.post('http://localhost:5001/events', event);
  axios.post('http://localhost:5002/events', event);
  axios.post('http://localhost:5003/events', event);

  res.status(201).json({ success: true });
});

const PORT = process.env.PORT || 5005;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
