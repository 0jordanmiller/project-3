var LocalStrategy = require("passport-local").Strategy;
var User = require("../models/talent");
var bCrypt = require("bcrypt-nodejs");

const register = new LocalStrategy(
  {
    passReqToCallback: true // allows us to pass back the entire request to the callback
  },
  function(req, username, password, done) {
    findOrCreateUser = function() {
      // find a user in Mongo with provided username
      User.findOne({ username: username }, function(err, user) {
        // In case of any error, return using the done method
        if (err) {
          console.log("Error in SignUp: " + err);
          return done(err);
        }
        // already exists
        if (user) {
          console.log("User already exists with username: " + username);
          return done(
            null,
            false /* req.flash("message", "User Already Exists") */
          );
        } else {
          // if there is no user with that email
          // create the user
          var newUser = new User();
          console.log("this is req.body", req.body.name);
          // set the user's local credentials
          newUser.username = username;
          newUser.password = createHash(password);
          newUser.name = req.body.name;
          newUser.bio = req.body.bio;
          newUser.talent = req.body.talent;
          newUser.contact = req.body.contact;
          newUser.zipcode = req.body.zipcode;

          // save the user
          newUser.save(function(err) {
            if (err) {
              console.log("Error in Saving user: " + err);
              throw err;
            }
            console.log("User Registration succesful");
            return done(null, newUser);
          });
        }
      });
    };
    // Delay the execution of findOrCreateUser and execute the method
    // in the next tick of the event loop
    process.nextTick(findOrCreateUser);
  }
);

// Generates hash using bCrypt
var createHash = function(password) {
  return bCrypt.hashSync(password, bCrypt.genSaltSync(10), null);
};

module.exports = register;

// newUser.email = req.param("email");
// newUser.name = req.param("name");
// newUser.zipcode = req.param("zipcode");
// newUser.bio = req.param("bio");

// newUser.name = req.body.name;
// newUser.email = req.body.email;
// newUser.bio = req.body.bio;
// newUser.talent = req.body.talent;
// newUser.contact = req.body.contact;
