const express = require("express");
const router = express.Router();

const messageClients = require("./messageClient")
const messagesRefact= new messageClients();

router.post("/message", (req, res) => {
  const {destination,body} = req.body;
  messagesRefact.publish_message(destination, body,res);

  checkError();
});


module.exports = router;