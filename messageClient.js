const axios = require('axios')


class messageClient{

 publish_message(destination,body,res){
    return axios
    .post(`http://localhost:3000/message`, { destination, body })
    .then(response => {
      res.status(200).send(response.data);
    })
    .catch(() => {
      res.status(500).send("internal error");
    });
}
}
module.exports = messageClient;



