const express = require("express");
const serverless = require("serverless-http");

const app = express();
const router = express.Router();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv/config");

router.get("/", (req, res) => {
  res.json({
    hello: "hi!",
  });
});

app.use(`/.netlify/functions/api`, router);
app.use(bodyParser.json());

//IMPORT ROUTES
const userRoutes = require("./routes/user");
app.use("/.netlify/functions/api/user", userRoutes);

//CONNECT TO DB
mongoose.connect("mongodb+srv://admin:Testing123@senacluster.yf0hh.mongodb.net/rest?retryWrites=true&w=majority", (err) => {
  if (err) console.log(err);
});

module.exports = app;
module.exports.handler = serverless(app);
