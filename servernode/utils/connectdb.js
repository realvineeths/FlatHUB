const mongoose = require("mongoose");
// const url = process.env.MONGO_DB_CONNECTION_STRING;
const connect = mongoose.createConnection(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});
// connect
//   .then((db) => {
//     console.log("connected to user db");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

const myDB = mongoose.connection.useDb('mern_auth');



