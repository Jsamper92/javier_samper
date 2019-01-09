
//COMPROBACIONES RODRIGO

  // const axios = require('axios')
  // let destination,body

  // //Error: Acepta campos vacios
  // checkPet({destination:'',body:""})
  // //Error: Acepta campos que no son string
  // checkPet({destination:'hola',body:"😀"})
  // //Error: Controlar cuando se introduce un numero
  // checkPet({destination:9,body:""})
  // //Error: Acepta campos con un número excesivo de caracteres
  // checkPet({destination:'holaffffjhdkdfhkfsdjgadfkahsafjdskhdfgfdjfgdafjdhkgdfjdhfgjafdhgkdjsagfddfjkgsfjhfgdshafbdfhabdahsfhola',body:""})




  // function checkPet(payload){
  //      axios.post('http://localhost:9001/message',payload)
  //     .then(response => console.log(response.status,response.statusText) )
  //     .catch((err) =>   console.log(err.response.status))
  //   }


//COMPROBACIONES JAVI

  // const axios = require('axios')



  // function enviarpayload(payload) {
  //   axios.post(`http://localhost:9001/message`, payload)
  //     .then(res => {
  //       console.log(`${res.status}, ${res.statusText}`);
  //     })
  //     .catch((err) => {
  //       console.log(payload)
  //       console.log(`${err.response.status}, ${err.response.statusText}`);
  //     })
  // }


  // let longPayload = "x";
  //   for(let i = 0; i < 25; i++){
  //     longPayload += "x"
  //   }

  /* enviarpayload({destination: "", body: ""}) */ //Da ok pero debe dar ERROR  porque da string vacios;
  /* enviarpayload({destination: 9, body: 9})  *///Da error porque es un numero pero controlar cuando es numero
  /* enviarpayload({destination: {a:"b"}, body: {a:"b"}}) */ //Da error porque es un numero pero controlar cuando es numero
  /* enviarpayload({destination: [1,2,3], body: [1,2,3]})  *///Da error porque es un numero pero controlar cuando es numero
  /* enviarpayload({destination: "javier@gmail.com", body: "Hola", plus: "plus"}) */ //Error porque tiene un campo mas
  /* enviarpayload({destination: "javiergmail", body: "hola"}) */ //Da ok pero debe dar ERROR porque debes de controlar que el DESTINATION sea un email.
  /* enviarpayload({destination: "javier@gmail.com", body: longPayload}) */ //Da ok pero debe dar ERROR porque debes controlar que la longitud de los caracteres
  /* enviarpayload({destination: "a", body: "a"})  *///Da ok pero debe dar ERROR porque no puede tener solo un caracter
  /* enviarpayload({destination: "javiergmail", body: "hola"}) */ //Da ok pero debe dar ERROR porque destination no es un gmail








