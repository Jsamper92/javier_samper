const express = require("express");
const router = express.Router();
//const checkErrors = require('./checkErrors')

const messageClients = require("./messageClient")
const messagesRefact= new messageClients();

router.post("/message", (req, res) => {
  const {destination,body} = req.body;

  

  if((destination.length<=1) && body.length <=1){
    res.status(500).json({message:"los campos no pueden estar vacios o tener un solo caracter"})
  }else if(destination.length>=20 && body.length >=20){
    res.status(500).json({message:"los campos no pueden tener más de 20 caracteres"})
  }else if(typeof destination !=="string" || typeof body !=="string"){
    res.status(500).json({message:"los campos no pueden ser distintos de tipo string"})
  }else if( !destination.includes("@")){
    res.status(500).json({message:"el destino debe ser un correo"})
  }else{
    messagesRefact.publish_message(destination, body,res);
  }
  

  //checkErrors.checkError();
});


module.exports = router;