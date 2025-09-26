const nodemailer = require("nodemailer");
async function emailVerification(email, otp) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "kazimayzid208@gmail.com",
      pass: "vanqlfxoxjehvdmm",
    },
  });

   const info = await transporter.sendMail({
    from: "kazimayzid208@gmail.com",
    to: email,
    subject: "verification",
    text: "Hello world?", 
    html: `<p>email verification code</p> <b>${otp}</b>`,
  });
}
module.exports = emailVerification;
