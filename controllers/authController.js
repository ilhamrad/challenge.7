const { register } = require("../models");
const passport = require("../lib/passport");

(module.exports = {
  registerForm: (req, res) => {
    res.render("register");
  },
  register: passport.authenticate("local", {
    successRedirect: "/login",
    failureRedirect: "/register",
    failureFlash: true,
  }),
}),
  {
    loginForm: (req, res) => {
      res.render("login");
    },
    login: passport.authenticate("local", {
      successRedirect: "/whoami",
      failureRedirect: "/login",
      failureFlash: true,
    }),
  };
