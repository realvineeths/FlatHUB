const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const passport = require("passport");
const mongoose = require('mongoose')
const path=require('path')
const app = express();
require("dotenv").config();

app.use(express.static(path.join(__dirname, '/../client/build')));

mongoose.connect(process.env.MONGO_DB_CONNECTION_STRING).then(() => {
  console.log('DB connected');
})
  .catch((e) => {
    console.log(e);
  })

require('./models/flats')
require('./models/user')
require("./strategies/JwtStrategy");
require("./strategies/LocalStrategy");
require("./authenticate");

const userRouter = require("./routes/userRoutes");
const flatRouter = require('./routes/flatRouter')


app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cookieParser(process.env.COOKIE_SECRET));


const whitelist = process.env.WHITELISTED_DOMAINS
  ? process.env.WHITELISTED_DOMAINS.split(",")
  : [];

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },

  credentials: true,
};

app.use(cors('*'));

app.use(passport.initialize());

app.use("/users", userRouter);
app.use("/flat", flatRouter);

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, '/../client/build/index.html'), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  })
})


const server = app.listen(process.env.PORT || 8081, function () {
  const port = server.address().port;

  console.log("App started at port:", port);
});
