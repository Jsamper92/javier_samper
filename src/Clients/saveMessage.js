const Message = require("../Models/userMessage");

let saveMessage = function(destination, body, status) {
  var userMessage = new Message({ destination, body, status });

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
