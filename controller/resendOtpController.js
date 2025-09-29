const userSchema = require("../model/userSchema");
const generatedOTP = require("../helpers/otpGenerator");
const otpExpireController = require("./otpExpireController");
async function resendOtpController(req, res) {
  const { email } = req.body;
  let user = await userSchema.findOne({ email: email });

  if (!user) {
    res.status(400).json({ success: false, message: "user not found" });
    return;
  }
  await userSchema.findOneAndUpdate(
    { email },
    { $set: { otp: generatedOTP(), otpExpire: otpExpireController() } },
    { new: true }
  );
}
module.exports = resendOtpController;
