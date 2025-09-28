const mongoose = require("mongoose")
function dbConfig() {
    mongoose.connect(process.env.DATABASE_URL).then(()=> {
        console.log("db connected");
        
    })
}
module.exports = dbConfig