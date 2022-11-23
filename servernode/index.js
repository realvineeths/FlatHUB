const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const passport = require("passport");
const mongoose=require('mongoose')
// const url2 = process.env.MONGO_DB_CONNECTION_STRING_FLATS;
// const url1 = process.env.MONGO_DB_CONNECTION_STRING;



if (process.env.NODE_ENV !== "production") {
  // Load environment variables from .env file in non prod environments
  // console.log('dev..');
  require("dotenv").config();
}
// require("./utils/connectdb");
// require("./utils/connectdb2");

// var conn      = mongoose.createConnection(url1);
// var conn2     = mongoose.createConnection(url2);
mongoose.connect('mongodb://127.0.0.1:27017/default',{
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

require('./models/flats')
require('./models/user')
require("./strategies/JwtStrategy");
require("./strategies/LocalStrategy");
require("./authenticate");

const userRouter = require("./routes/userRoutes");
const flatRouter=require('./routes/flatRouter')

const app = express();

// app.use(bodyParser.json());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use(cookieParser(process.env.COOKIE_SECRET));

//Add the client URL to the CORS policy

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

// 
app.use(cors(corsOptions));

app.use(passport.initialize());

app.use((req,res,next)=>{

  // console.log(req.body);
  next();
})

app.use("/users", userRouter);
app.use("/flat", flatRouter);

app.get("/", function (req, res) {
  res.send({ status: "success" });
});

//Start the server in port 8081

const server = app.listen(process.env.PORT || 8081, function () {
  const port = server.address().port;

  console.log("App started at port:", port);
});
