const mongoose = require("mongoose");

const server = "mongodb";
const database = "message_app";

class connectMongo {
  connectBD() {
    setTimeout(() => {
      mongoose
        .connect(
          `mongodb://${server}/${database}`,
          {
            useNewUrlParser: true
          }
        )
        .then(x => {
          console.log(
            `Connected to Mongo! Database name: "${x.connections[0].name}"`
          );
        })
        .catch(err => {
          console.error("Error connecting to mongo", err);
        });
    }, 25000);
  }
}

module.exports = connectMongo ;
