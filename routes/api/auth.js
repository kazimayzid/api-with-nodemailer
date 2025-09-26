const express = require("express");
const  registrationController  = require("../../controller/registrationController");
const  otpController  = require("../../controller/otpController");
const authRoute = express();

authRoute.use("/registration", registrationController)
authRoute.use("/otp", otpController)

module.exports = authRoute