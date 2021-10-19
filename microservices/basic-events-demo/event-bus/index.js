require('dotenv').config();
const express = require('express');
require('./db');
const routes = require('./routes');

const app = express();

app.use(express.json());

app.use('/', routes);

const PORT = process.env.PORT || 5005;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
