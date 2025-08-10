const { sendSuccessResponse } = require("../utils/success-response");
const logger = require("../utils/logger");
const callService = require("../services/call.service");

class CallController {
  async start(req, res, next) {
    logger.info("[CallController] Start");
    try {
      const data = await callService.start(req.user.id, req.body.to);
      return sendSuccessResponse(res, { message: "Call started", data });
    } catch (error) {
      return next(error);
    }
  }

  async end(req, res, next) {
    logger.info("[CallController] End");
    try {
      const data = await callService.end(req.body.callId);
      return sendSuccessResponse(res, { message: "Call ended", data });
    } catch (error) {
      return next(error);
    }
  }
}

module.exports = new CallController();
