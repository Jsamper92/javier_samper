const mongoose = require('mongoose');
const Schema   = mongoose.Schema;


const connectionBD = require('../database');

const connectionMongo = new connectionBD()

const creditSchema = new Schema({
  amount: {type:Number}
  
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

const credit = mongoUno.model('Credit', creditSchema);
const creditReplica = mongoDos.model('Credit', creditSchema);

module.exports = {credit,creditReplica};