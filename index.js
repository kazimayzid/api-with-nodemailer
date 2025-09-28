require('dotenv').config()
const express = require("express");
const route = require("./routes");
const dbConfig = require("./db/dbConfig");
const app = express();
const port = 3000;
app.use(express.json())
dbConfig()
app.use("/", route);

app.listen(port, () => {
  console.log("server is running at 3000");
});
