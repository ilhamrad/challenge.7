const express = require("express");
const router = express.Router();
const gameController = require("../controllers/homeController");
const restrict = require("./middlewares/restrict");

//routing home
router.get("/", restrict, gameController.home);

//routing gameplay
router.get("/gameplay", gameController.gameplay);

module.exports = router;
