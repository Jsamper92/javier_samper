require("dotenv").config();

const express = require("express");

const bodyParser = require("body-parser");
const app = express();

const database = require("./src/database");
const connectMongo = new database();
const getMessages = require("./src/Controllers/getMessages");
const postCredit = require("./src/Routes/postCredit");
const postMessage = require("./src/Routes/postMessage");
const index = require("./src/Routes/index");

//connectMongo.connectBD();
//connectMongo.connectBD_secondary();

app.use(bodyParser.json());
app.use("/", postCredit);
app.use("/", postMessage);
app.use("/", getMessages);
app.use("/", index);

app.listen(9001, () => {
  console.log("escuchando en puerto 9001");
});
module.exports = app;
