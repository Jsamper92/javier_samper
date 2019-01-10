require('dotenv').config();

const bodyParser   = require('body-parser');
const express      = require('express');
const app = express();
const messages = require('./messages')
const mongoose     = require('mongoose');


 setTimeout(() => {
  mongoose
  .connect('mongodb://mongodb/message_app', {
    useNewUrlParser: true
  })
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });
}, 25000);

app.use(bodyParser.json());


app.get('/',(req,res)=>{
  res.send("hola mundo")
})

app.use('/', messages)

app.listen(9001,()=>{console.log("escuchando en puerto 9001")})
module.exports = app;
