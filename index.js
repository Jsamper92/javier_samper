require('dotenv').config();


const express      = require('express');


const bodyParser   = require('body-parser');
const app = express();
const sendMessages = require('./src/routes/sendMessages')
const database = require('./src/database')
const getMessages = require('./src/Controllers/getMessages')
const validation = require('./src/validations/validation');
const connectMongo = new database();

connectMongo.connectBD()

app.use(bodyParser.json());


app.get('/',(req,res)=>{
  res.send("hola mundo")
})
app.get("/messages", getMessages);

app.post('/messages',(req,res)=>{
  validation(req,res)
});



app.listen(9001,()=>{console.log("escuchando en puerto 9001")})
module.exports = app;
