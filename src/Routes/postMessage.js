const express = require('express');
const postCredit = express.Router();
const creditValidation = require('../validations/creditValidation');
const saveMessage = require('../database')
const savePost = new saveMessage()


postCredit.post('/messages',(req,res,next)=>{
  const {destination,body} = req.body;
  
    creditValidation(req,res,next)
  });

  module.exports = postCredit;