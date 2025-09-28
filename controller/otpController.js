const userSchema = require("../model/userSchema");

async function otpController(req, res) {
  const { email, otp } = req.body;
  let existinguser = await userSchema.findOne({ email: email });
  console.log(existinguser);
  if (!existinguser) {
    return res.status(400).json({success:false, message: "user not Found"})
  }
  if (existinguser.otpExpire < Date.now()) {
     res.status(400).json({success: false, message:"otp is Expired"});
    return;
  }
  if (existinguser.otp !== otp) {
    res.send("otp is invelid");
    return;
  }

  if (existinguser.otp == otp) {
    res.send("otp matched");
    existinguser.varified = true
  } else {
    res.send("not matched");
  }
}
module.exports = otpController;
