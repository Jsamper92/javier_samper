const Credit = require("../Models/credit");
const Validation = require('../validations/validation');

let creditValidation = function(req,res,next) {
  
  Credit.find({})
  .then(credit => {
  if(credit[0].amount === 0){
    res.status(500).send("No cash, No messages")
    } else {
      Validation(req,res,next)
    }
  })
  .catch(error => {
    res.status(500).send("Error: No credit database")
    
  })
}

module.exports = creditValidation;