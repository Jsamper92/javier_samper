const Message = require('../Models/userMessage')

module.exports = function(conditions = {}){
    return Message.find(conditions)
}