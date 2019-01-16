const mongoose = require('mongoose');
const connectionBD = require('../database');

const connectionMongo = new connectionBD()
const Schema   = mongoose.Schema;




const messageSchema = new Schema({
  destination: String,
  body: String,
  status: {type:Boolean},
  confirmationMessage:{type:Boolean}
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const url1 = `mongodb://localhost:27017/mongoBD`
const mongoUno = connectionMongo.connect(url1);

const url2 = `mongodb://localhost:27018/mongoBD`
const mongoDos = connectionMongo.connect(url2);

const message = mongoUno.model('Mail', messageSchema);
const messageReplica = mongoDos.model('Mail', messageSchema);
module.exports = { message, messageReplica };


