const validation = require('../validations/validation');
const express      = require('express');
const sendMessage = express();

sendMessage.post('/message',(req,res)=>{
validation(req,res)
})
