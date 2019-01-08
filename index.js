
const bodyParser   = require('body-parser');
const express      = require('express');
const app = express();
const messages = require('./messages')


app.use(bodyParser.json());


app.get('/',(req,res)=>{
  res.send("hola mundo")
})

app.use('/', messages)

app.listen(9001,()=>{console.log("escuchando en puerto 9001")})
module.exports = app;
