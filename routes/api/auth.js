const express = require("express");
const  registrationController  = require("../../controller/registrationController");
const  otpController  = require("../../controller/otpController");
const resendOtpController = require("../../controller/resendOtpController");
const authRoute = express();

authRoute.use("/registration", registrationController)
authRoute.use("/otp", otpController)
authRoute.use("/resendOtp", resendOtpController)

module.exports = authRoute