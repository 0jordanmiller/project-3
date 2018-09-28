const express = require("express");
const env = require("dotenv").config();
const passport = require("passport");
const session = require("express-session");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

// const passportSetup = require("./config/passport-setup");
const routes = require("./routes");
const app = express();
const PORT = 3001 || process.env.PORT;
// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Add routes, both API and view

app.use(
  session({
    secret: "keyboard cat",
    resave: true,
    saveUninitialized: true
  })
); // session secret

app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

app.use(routes);

// Connect to the Mongo DB

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/hidden_talents"
);

// db.on("error", err => {
//   console.log(`There was an error connecting to the database: ${err}`);
// });
// db.once("open", () => {
//   console.log(`You have successfully connected to your mongo database!`);
// });

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
