const logger = require("../utils/logger");
const messageRepository = require("../repository/message.repository");
const { throwBadRequestError } = require("../utils/throwErrors");

class MessageService {
  async send(from, to, content) {
    if (!from || !to || !content)
      throw throwBadRequestError("Missing message fields");
    logger.info("[MessageService] send");
    return messageRepository.createMessage(from, to, content);
  }

  async history(userId, otherUserId) {
    logger.info("[MessageService] history");
    return messageRepository.getConversation(userId, otherUserId);
  }
}

module.exports = new MessageService();
