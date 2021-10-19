require('dotenv').config();
const express = require('express');
const axios = require('axios');

const app = express();

app.use(express.json());

app.post('/events', async (req, res) => {
  const { type, data } = req.body;

  if (type === 'CommentCreated') {
    const status = data.content.includes('banana') ? 'rejected' : 'approved';

    await axios.post('http://localhost:5005/events', {
      type: 'CommentModerated',
      data: { ...data, status },
    });
  }

  res.status(200).json({ success: true });
});

const PORT = process.env.PORT || 5003;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
