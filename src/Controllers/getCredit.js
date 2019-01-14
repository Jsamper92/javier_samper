const saveCredit = require('../Clients/saveCredit')

module.exports = function(req,res){
    saveCredit().then(amount => {
        res.json(amount)
    })
}


  