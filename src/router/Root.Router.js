const express = require("express");
const rootRoute = express.Router();

const foodRoute = require("./Food.Router");
const likeRoute = require("./Like.controller");
// food
rootRoute.use("/food", foodRoute);

// like
rootRoute.use("/like", likeRoute);

module.exports = rootRoute;
