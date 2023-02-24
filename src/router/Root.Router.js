const express = require("express");
const rootRoute = express.Router();

const foodRoute = require("./Food.Router");
const likeRoute = require("./Like.Router");
const rate = require("./Rate.Router");
// food
rootRoute.use("/food", foodRoute);

// like
rootRoute.use("/like", likeRoute);
//rated food
rootRoute.use("/rate", rate);

module.exports = rootRoute;
