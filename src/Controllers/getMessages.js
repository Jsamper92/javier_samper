const getMessages = require("../Clients/getMessages");

module.exports = function(req, res) {
  getMessages().then(messages => {
    res.json(messages);
  });
};
