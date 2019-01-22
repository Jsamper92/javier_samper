const http = require("http");
const saveMessage = require("../transactions/saveMessage");
const sendMessage = require("./sendMessage");
const uuidv4 = require("uuid/v4");

var Queue = require("bull");

const messageQueue = new Queue("messageQueue");

const queueMessage = function(req, res, next) {
  let uuid = uuidv4();
  let messageObj = req.body;
  messageObj.uuid = uuid;
  messageObj.status = "PENDING";

  saveMessage(messageObj);

  messageQueue
    .add(messageObj)
    .then(() =>
      res
        .status(200)
        .send(
          `Mensaje enviado satisfactoriamente, puedes comprobar el estado del mensaje en la direccion /messages/${uuid}/status`
        )
    );
};

messageQueue.process((job, done) => {
  sendMessage({ ...job.data });
  done();
});

messageQueue.on("completed", (job, result) => {
  console.log(`Trabajo terminado con el resultado ${result}`);
});

messageQueue.on("active", function(job, jobPromise) {
  console.log("ha comenzado un nuevo trabajo");
});

messageQueue.on("drained", function() {
  console.log("la cola de trabajo esta actualmente vacio");
});

module.exports = queueMessage;
