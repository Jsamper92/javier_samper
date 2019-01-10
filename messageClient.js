const User = require("./Models/User");
const axios = require("axios");
class messageClient {
  publish_message(destination, body, res) {
    return axios
      .post(`http://javier_samper_messageapp_1:3000/message`, {
        destination,
        body
      },{timeout:1000})
      
  }

  view_message(res) {
    User.find()
      .then(users => {
        res.status(200).json(users);
      })
      .catch(err => {
        console.log(err);
      });
  }

  publish_message_BD(destination, body, status,confirmationMessage, res) {
    let user = new User({
      destination,
      body,
      status: status,
      confirmationMessage: confirmationMessage
    });
    user
      .save()
      .then(() => {
        console.log("Registro guardado en base de datos y mensaje enviado");
      })
      .catch(() => {
        console.log("Registro no enviado");
      });
  }
}
module.exports = messageClient;
