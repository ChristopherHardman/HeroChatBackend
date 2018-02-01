const mongoose = require('mongoose');
const chatModel = require ('../Model/chatModel');


const addUser = async (ctx, next) => {
  try {
      console.log('Conversations');
    }
  catch (error) {
    console.log('ERROR', error);
  }
}


const conversations = async (ctx, next) => {
  try {
    const chats = await chatModel.find();
      ctx.body = chats;
      ctx.status = 200;
      return ctx;
    }
  catch (error) {
    console.log('ERROR', error);
  }
}

const addConversation = async (ctx, next) => {
  try {
      console.log('CTX', ctx.request.body);
      const newChat = new chatModel(
        { title: ctx.request.body.title
        });
        newChat.save();
        console.log('save');
        ctx.status = 200;
    }
  catch (error) {
    console.log('ERROR', error);
  }
}

const addMessage = async (ctx, next) => {
  try {
      const chat = await chatModel.findOne({_id: ctx.request.body.message.id});
      chat.messages.push(ctx.request.body.message);
      chat.save();
    }
  catch (error) {
    console.log('ERROR', error);
  }
}

module.exports = { addUser, conversations, addConversation, addMessage};
