const mongoose = require("mongoose")
function dbConfig() {
    mongoose.connect("mongodb+srv://nodemailer:nodemailer@cluster0.tiymfmr.mongodb.net/nodemailer?retryWrites=true&w=majority&appName=Cluster0").then(()=> {
        console.log("db connected");
        
    })
}
module.exports = dbConfig