const mongoose = require("mongoose");
const url = process.env.MONGO_DB_CONNECTION_STRING_FLATS;
const connect = mongoose.createConnection(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});
connect
  .then((db) => {
    console.log("connected to flat db");
  })
  .catch((err) => {
    console.log(err);
  });
