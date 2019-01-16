const Message = require("../Models/userMessage");

const connectionBD = require('../database');
const connectionMongo = new connectionBD();

const url1 = `mongodb://localhost:27017/mongoBD`
const mongoUno = connectionMongo.connect(url1);

const url2 = `mongodb://localhost:27018/mongoBD`
const mongoDos = connectionMongo.connect(url2);

let saveMessage = function(destination, body, status) {
  var userMessage = new Message({ destination, body ,status});

  userMessage
    .save()
    .then(() => {
      console.log("Message saved succesfully:");
    })
    .catch(() => {
      console.log("Error while saving");
    });
};

module.exports = saveMessage;
