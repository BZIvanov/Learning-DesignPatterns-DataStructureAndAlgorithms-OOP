const mongoose = require('mongoose');

mongoose
  .connect(process.env.DB_URI, {})
  .then((connection) => {
    console.log(`DB ready on ${connection.connections[0].host}`);
  })
  .catch((error) => console.log(error));
