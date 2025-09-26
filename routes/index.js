const express = require("express");
const apiRoute = require("./api");
const route = express.Router();

route.use("/api/v1", apiRoute)

module.exports = route