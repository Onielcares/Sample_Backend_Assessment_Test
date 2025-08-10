const { sendSuccessResponse } = require("../utils/success-response");
const logger = require("../utils/logger");
const messageService = require("../services/message.service");

class MessageController {
  async getHistory(req, res, next) {
    logger.info("[MessageController] Get history");
    try {
      const data = await messageService.history(req.user.id, req.params.userId);
      return sendSuccessResponse(res, { message: "Chat history", data });
    } catch (error) {
      return next(error);
    }
  }
}

module.exports = new MessageController();
