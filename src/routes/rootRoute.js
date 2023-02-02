const express = require("express");
const rootRoute = express.Router();
const userRoute = require("./userRoute");

// sử dụng middleware của express
rootRoute.use("/user", userRoute);

// product
// rootRoute.use("/product",productRoute);

//food
// rootRoute.use("/food",foodRoute);

module.exports = rootRoute;
