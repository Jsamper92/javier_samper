const axios = require('axios')


class messageClient{

 publish_message(destination,body,res){
    return axios
    .post(`http://javier_samper_messageapp_1:9001/message`, { destination, body })
    .then(response => {
      res.status(200).send(response.data);
    })
    .catch(() => {
      res.status(500).send("internal error");
    });
}
}
module.exports = messageClient;



