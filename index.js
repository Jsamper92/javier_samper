require('dotenv').config();


const express      = require('express');


const bodyParser   = require('body-parser');
const app = express();
//const messages = require('./src/routes/sendMessages')
const database = require('./src/database')
const getMessages = require('./src/Clients/getMessages')
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

//app.use('/messages', require('./src/routes/sendMessages'))
//app.use('/',getMessages)

app.listen(9001,()=>{console.log("escuchando en puerto 9001")})
module.exports = app;
