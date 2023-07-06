const passport = require("passport");
const localStrategy = require("passport-local").Strategy;
const { register } = require("../models");

async function authenticate(username, password, done) {
  try {
    const user = await register.authenticate({ username, password });

    return done(null, user);
  } catch (e) {
    return done(null, false, {
      message: err,
    });
  }
}

passport.use(
    new localStrategy({
         usernameField: "username", 
         passwordField: "password" 
        }, authenticate));

//ngambil data yang udah di parsing > ngambil user id
passport.serializeUser((user, done) => done(null, user.id));

//dari id ngambil data user
passport.deserializeUser(async (id, done) => done(null, await register.findByPk(id)));

module.exports = passport;
