const mongoose = require('mongoose');
const UserModel = require ('./Model/chatModel');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://heroku_gzk5t4gv:v2fisna5tfu8t7p9qe5btjlse9@ds121118.mlab.com:21118/heroku_gzk5t4gv', {useMongoClient: true});
mongoose.connection.on('connected', () => {
  console.log('Mongoose connected')
})

// 'mongodb://localhost/chat'
// 'mongodb://heroku_7dl8lt9l:uiodklj69ha4lumuiju1porjkk@ds121118.mlab.com:21118/heroku_gzk5t4gv'
