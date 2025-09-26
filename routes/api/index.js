const express = require("express");
const authRoute = require("./auth");
const apiRoute = express();

apiRoute.use("/auth", authRoute)

module.exports = apiRoute