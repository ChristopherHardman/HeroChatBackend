const Router = require('koa-router');
const controller = require('./Controllers/chatController.js');
const router = new Router;
const ChatModel = require('./Model/chatModel');

//Student routes
router.get('/conversations', controller.conversations);
router.post('/addUser', controller.addUser);
router.post('/addConversation', controller.addConversation);
router.post('/addMessage', controller.addMessage);

module.exports = router;
