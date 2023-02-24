// Import necessary modules and controller functions

const express = require("express");
const {
  addRate,
  getRestaurantsWithRate,
  getUSersWithRate,
} = require("../controller/Rate.controller");
// Create a new router instance
const userRoute = express.Router();
// Set up routes and associate them with their respective controller functions

userRoute.post("/addrate", addRate);
userRoute.get("/getreswithrate", getRestaurantsWithRate);
userRoute.get("/getuserwithrate", getUSersWithRate);

// Export the router for use in other modules
module.exports = userRoute;
