const express = require('express');
const postCredit = express.Router();
const saveCredit = require('../Clients/saveCredit')
const lock = require('locks');
var mutex = lock.createMutex();

postCredit.post('/credit',(req,res)=>{
    const {amount} = req.body

    mutex.lock(function () {
        saveCredit(amount,res)
      mutex.unlock();
    
    })
})

module.exports = postCredit