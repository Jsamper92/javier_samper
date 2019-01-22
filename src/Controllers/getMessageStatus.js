const getMessageStatus = require('../clients/getMessageStatus')

module.exports = function(req,res){
    const id = req.params._id;
    getMessageStatus(id).then(messageStatus =>{
        status = messageStatus[0].status
        res.json({Estado:`resultado ${status}`})
    })
}