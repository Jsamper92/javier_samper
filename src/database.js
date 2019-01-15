const mongoose = require("mongoose");

const server = "mongodb";
const database = "message_app";

const server_1 = "mongodb";
const database_1 = "mongodb_2";

class connectMongo {
  connectBD() {
    setTimeout(() => {
      mongoose
        .connect(
          `mongodb://${server}/${database}:27017`,
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

  connectBD_secondary() {
    setTimeout(() => {
      mongoose
        .connect(
          `mongodb://${server_1}/${database_1}:28018`,
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
    }, 26000);
  }


}

module.exports = connectMongo ;
