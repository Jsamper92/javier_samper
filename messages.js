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

    messagesRefact.publish_message(destination, body,res)
    .then(() => {
      messagesRefact.publish_message_BD(destination,body,true);
      res.status(200).send("Registro guardado en base de datos y mensaje enviado")
    })
    .catch(() => {
      if(res.status(408)){
        messagesRefact.publish_message_BD(destination,body,true,false);
        res.status(408).send("Mensaje enviado pero no confirmado en el registro")
        
      }else{
        messagesRefact.publish_message_BD(destination,body);
        res.status(500).send("Registro guardado en base de datos,pero el mensaje no fue enviado")
      }
    });    
  }
  

  //checkErrors.checkError();
});

router.get("/message",(req,res)=>{
  messagesRefact.view_message(res)
})


module.exports = router;