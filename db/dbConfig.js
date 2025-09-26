const mongoose = require("mongoose")
function dbConfig() {
    mongoose.connect(process.env.DB_URL).then(()=> {
        console.log("db connected");
        
    })
}
module.exports = dbConfig