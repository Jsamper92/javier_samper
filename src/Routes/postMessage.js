const express = require('express');
const postCredit = express.Router();
const creditValidation = require('../validations/creditValidation');

postCredit.post('/messages',(req,res,next)=>{
    creditValidation(req,res,next)
  });

  module.exports = postCredit;