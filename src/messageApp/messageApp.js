const axios = require('axios')

let messageApp = function(destination,body){
    return axios
      .post(`http://javier_samper_messageapp_1:3000/message`, {
        destination,
        body
      },{timeout:5000})
}

module.exports = messageApp