const userSchema = require("../model/userSchema");

async function otpController(req, res) {
  const { email, otp } = req.body;

  let existinguser = await userSchema.findOne({ email: email });
  console.log(existinguser);
  
  if (existinguser.otp == otp) {
    res.send("otp matched");
  } else {
    res.send("not matched");
    
  }
}
module.exports = otpController;
