const express = require('express');
const indexRoute = express.Router();

indexRoute.get('/',(req,res)=>{
    res.send("hola mundo")
  })

module.exports = indexRoute;