const express = require('express');
const getMessagesRoute = express.Router();
const Message = require("../Models/userMessage");

getMessagesRoute.get('/messages',  (req, res, next) =>{
  Message.find({}, (error, messagesDatabase) => {
		if (error) {
			next(error);
		} else {
			res.status(200).json(messagesDatabase);
		}
	});
});

module.exports = getMessagesRoute;