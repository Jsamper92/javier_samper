const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const userSchema = new Schema({
  destination: String,
  body: String,
  status: {type:Boolean},
  confirmationMessage:{type:Boolean}
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const User = mongoose.model('User', userSchema);
module.exports = User;