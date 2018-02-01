const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const chat = new Schema({
  title: String,
  messages: []
});

const chatModel  = mongoose.model('ChatModel', chat);

module.exports = chatModel;
