const express = require("express");
const {
  createLike,
  unLike,
  //   likesByRestaurantID,
} = require("../controller/LIke.controller");
const userRoute = express.Router();
userRoute.post("/createLike", createLike);
userRoute.delete("/unLike", unLike);
// userRoute.get("/likebyresid/:res_id", likesByRestaurantID);
// userRoute.get("/test", );

module.exports = userRoute;
