const mongoose = require("mongoose");

const server = "localhost";
const database = "mongo_1";

const server_1 = "localhost";
const database_1 = "mongo_2";

class connectMongo {
  constructor() {
      (this.connect = url => {
        return mongoose.connect(
          url,
          {
            useNewUrlParser: true
          }
        );
      });
  }
}


module.exports = connectMongo
