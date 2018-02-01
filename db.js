const mongoose = require('mongoose');
const UserModel = require ('./Model/chatModel');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/chat', {useMongoClient: true});
mongoose.connection.on('connected', () => {
  console.log('Mongoose connected')
})

//mongoose.connect('mongodb://localhost/projectB', {useMongoClient: true});
