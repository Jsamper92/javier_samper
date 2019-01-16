const Credit = require("../Models/credit");

let saveCredit = function(amount, res) {
  return Credit.find({})
    .then(credit => {
      if (credit.length === 0) {
        let userCredit = new Credit({ amount });
        
        userCredit
          .save()
          .then(x => {
            console.log(x)
            res.status(200).json({ message: "crdit added" });
          })
          .catch(() => {
            res.status(200).json({ message: "Error with saving credit" });
          });
      } else {
        UserCredit.findOneAndUpdate(
          { _id: credit[0]._id },
          { amount: credit[0].amount + amount }
        )
          .then(credit => {
            res.status(200).send("Credit updated!");
          })
          .catch(credit => {
            res.status(500).send("Error updating credit");
          });
      }
    })
    .catch(() => {
      console.log("error database");
    });
};

module.exports = saveCredit;
