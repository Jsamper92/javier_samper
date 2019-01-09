const axios = require('axios')
let destination,body

//Error: Acepta campos vacios
checkPet({destination:'',body:""})
//Error: Acepta un campo vacio mientras los demás tienen contenido
checkPet({destination:'hola',body:"",pie:""})
//Error: Acepta más campos de los requeridos
checkPet({destination:'hola',body:""})
//Error: Acepta campos que no son string
checkPet({destination:'hola',body:"😀"})
//Error: Controlar cuando se introduce un numero
checkPet({destination:9,body:""})
//Error: Controlar cuando los campos vienen vacios
checkPet({destination,body})
//Error: Acepta cuando existen espacios en los campos
checkPet({destination:'hola   hola',body:""})
//Error: Acepta campos con un número excesivo de caracteres
checkPet({destination:'holaffffjhdkdfhkfsdjgadfkahsafjdskhdfgfdjfgdafjdhkgdfjdhfgjafdhgkdjsagfddfjkgsfjhfgdshafbdfhabdahsfhola',body:""})




function checkPet(payload){
     axios.post('http://localhost:3000/message',payload)
    .then(response => console.log(response.status,response.statusText) )
    .catch((err) =>   console.log(err.response.status))
  }




