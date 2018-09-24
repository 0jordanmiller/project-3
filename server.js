const express = require("express");
const env = require("dotenv").config();
const passport = require("passport");
const session = require("express-session");
const bodyParser = require("body-parser");
const path = require("path");
const mongoose = require("mongoose");
// const passportSetup = require("./config/passport-setup");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Add routes, both API and view
app.use(passport.initialize());

app.use(expressSession({ secret: 'mySecretKey' }));

passport.serializeUser(function (user, done) {
  done(null, user._id);
});

passport.deserializeUser(function (id, done) {
  User.findById(id, function (err, user) {
    done(err, user);
  });
});

app.use(passport.initialize());

app.use(passport.session()); // persistent login sessions

app.use(routes);

// Send every request to React app

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/public/index.html"));
});

// Connect to the Mongo DB

mongoose.connect(
<<<<<<< HEAD
  process.env.MONGODB_URI || "mongodb://localhost/talentdb"
=======
  process.env.MONGODB_URI || "mongodb://localhost/hidden_talents"
>>>>>>> 636f33bb864c17f7f69fe1f5af78ea6e572a65be
);

// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
