// Import necessary modules and controller functions

const express = require("express");
const {
  likeStatusRes,
  getRestaurantsWithLikes,
  getUsersWithLikes,
} = require("../controller/LIke.controller");
// Create a new router instance
const userRoute = express.Router();
// Set up routes and associate them with their respective controller functions

userRoute.post("/likestatus", likeStatusRes);
userRoute.get("/getreswithlike", getRestaurantsWithLikes);
userRoute.get("/getuserwithlike", getUsersWithLikes);
// Export the router for use in other modules
module.exports = userRoute;
