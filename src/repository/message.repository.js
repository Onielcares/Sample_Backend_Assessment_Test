const Message = require("../models/message.model");

async function createMessage(from, to, content) {
  return Message.create({ from, to, content });
}

async function getConversation(userId, otherUserId) {
  return Message.find({
    $or: [
      { from: userId, to: otherUserId },
      { from: otherUserId, to: userId },
    ],
  }).sort({ createdAt: 1 });
}

module.exports = { createMessage, getConversation };
