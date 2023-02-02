const express = require("express");

// gán lại hàm cho một biến mới
const app = express();
// cho phép server backend đọc được chuỗi json
// middleware
app.use(express.json());

const cors = require("cors");
app.use(cors());

const rootRoute = require("./routes/rootRoute");
app.use("/api", rootRoute);
app.listen(8080);
