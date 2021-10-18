require('dotenv').config();
const express = require('express');
const axios = require('axios');

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 5002;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
