const emailVerification = require("../helpers/emailVerification");
const generatedOTP = require("../helpers/otpGenerator");

const userSchema = require("../model/userSchema");
const bcrypt = require("bcrypt");
const otpExpireController = require("./otpExpireController");
function registrationController(req, res) {
  console.log(req.body);
  const { firstName, lastName, email, password, varified } = req.body;
  if (!firstName) {
    return res.json("firstName is required");
  }
  if (!lastName) {
    return res.json("lastName is required");
  }
  if (!email) {
    return res.json("email is required");
  }
  if (!password) {
    return res.json("password is required");
  }

 const otp = generatedOTP()
  console.log(otp);
  

  bcrypt.hash(password, 10, function (err, hash) {
    const user = new userSchema({
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: hash,
      varified: varified,
      otp: otp,
      otpExpire: otpExpireController()
    });
    user.save();
    emailVerification(email, otp)
    res.status(201).json({
      message: "Registration successful",
      data: user,
    });
  });
}
module.exports = registrationController;
