const express = require("express");
const router = require("express").Router();
const authController = require("../controllers/authController");
const restrict = require('./middlewares/restrict');
const homeController = require("../controllers/homeController");


//register (create)
router.get("/register", authController.registerForm);
router.post("/register", authController.register);
// router.post('/register', authController.register)

router.get('/whoami', restrict, homeController.whoami)

//login
router.get("/login", authController.loginForm);
router.post("/login", authController.login);
// router.post('/login',)

module.exports = router;
