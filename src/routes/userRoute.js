const express = require("express");
const userRoute = express.Router();

//import commonjs Module
// import hàm getUser từ thư mục controller
const { getUser, createUser } = require("../controllers/userController");

// tạo API phương thức GET
userRoute.get("/getUser/:id", getUser);

// tạo API phương thức POST
userRoute.post("/createUser", createUser);

// tạo API phương thức PUT
// userRoute.put("/updateUser",(req,res)=>{});

module.exports = userRoute;
