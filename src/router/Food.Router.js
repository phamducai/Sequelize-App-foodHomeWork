const express = require("express");
const { getFood } = require("../controller/Food.controller");
const userRoute = express.Router();
userRoute.get("/getFood", getFood);

module.exports = userRoute;
