const bull = require("bull");

const uuid = require("uuid");
const sendMessage = require("./controllers/sendMessage");
const saveMessage = require("./clients/saveMessage")

module.exports = function(req, res) {
  const {destination,body} = req.body;
    const messageId = uuid();
  const messageQueue = new bull("message queue");

  messageQueue.add({destination,body,messageId}).then(() => {res.status(200).send("Message send")})
                            .then(()=>{res.status(200).send(`You can check the message status with this id ${messageID}`)})

  messageQueue.process(async (job, data) => {
    await sendMessage({ ...message, status: "PROCESSING" });
  });
};
