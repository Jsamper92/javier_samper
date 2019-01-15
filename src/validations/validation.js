const messageApp = require('../messageApp/messageApp');
const saveMessage = require('../Clients/saveMessage');
const updateMoney = require('../Clients/updateMoney');
const lock = require('locks');
var mutex = lock.createMutex();

let validation = function(req,res){
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
        messageApp(destination,body)
        .then(() => {
            saveMessage(destination,body,true);
            res.status(200).send("Registro guardado en base de datos y mensaje enviado")
            
            mutex.lock(function(){
              updateMoney()
            })
            mutex.unlock();

          })
        .catch(() => {
            if(res.status(408)){
                saveMessage(destination,body,true,false);
                res.status(408).send("Mensaje enviado pero no confirmado en el registro")
              
            }else{
                saveMessage(destination,body);
                res.status(500).send("Registro guardado en base de datos,pero el mensaje no fue enviado")
            }
        });
      }
}

module.exports = validation