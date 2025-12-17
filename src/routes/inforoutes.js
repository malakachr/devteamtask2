const express = require("express");
const router = express.Router();
const infoController = require("../controllers/infocontroller.js");

router.get("/", infoController.getInfo);

module.exports = router;
