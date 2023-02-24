const express = require("express");
const { OrderFood } = require("../controller/OrderFood.controller");
const userRoute = express.Router();
userRoute.post("/postOder", OrderFood);

module.exports = userRoute;
