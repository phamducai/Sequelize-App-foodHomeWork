const express = require("express");
const { test } = require("../controller/Test.controller");
const tests = express.Router();
tests.get("", test);

module.exports = tests;
