require('dotenv').config();
const express = require('express');
const cors = require('cors');
require('./db');
const axios = require('axios');
const routes = require('./routes');
const { handleEvent } = require('./controllers');

const app = express();

app.use(express.json());
app.use(cors());

app.use('/', routes);

const PORT = process.env.PORT || 5002;
app.listen(PORT, async () => {
  console.log(`Listening on port ${PORT}`);

  try {
    const { data } = await axios.get('http://localhost:5005/events');

    for (const event of data) {
      await handleEvent(event.type, event.data);
    }
  } catch (error) {
    console.log(error);
  }
});
