const otpGenerator = require("otp-generator");
function generatedOTP() {
 return  otpGenerator.generate(6, { upperCaseAlphabets: false, specialChars: false });

}
module.exports = generatedOTP;
