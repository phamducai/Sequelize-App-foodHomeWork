const express = require("express");
const cors = require("cors");
const rootRoute = require("./router/Root.Router");
const test = require("./router/Test.Router");
const app = express();
app.use(cors());

app.use(express.json());
app.use(express.static("."));
app.use("/test", test);
app.use("/api", rootRoute);
app.listen(8080, () => console.log("success"));
