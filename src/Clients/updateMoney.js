
const UserCredit = require("../Models/credit");

let updateMoney = function(res) {
  
  return UserCredit.find({})
  .then(credit => {
   
      return UserCredit.findOneAndUpdate({_id: credit[0]._id}, { "amount" : credit[0].amount - 100 })
      .then(credit => {
        
        res.status(200).send("Payed!")
      })
      .catch(credit => {
        res.status(500).send("Error paying!")
      })

  })
  .catch(error => {
    res.send("no credit")
  })

}


module.exports = updateMoney;