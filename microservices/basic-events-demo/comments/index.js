require('dotenv').config();
const express = require('express');
const cors = require('cors');
require('./db');
const routes = require('./routes');

const app = express();

app.use(express.json());
app.use(cors());

app.use('/', routes);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
