const logger = require("../utils/logger");
const { callRepository } = require("../repository/");
const { throwBadRequestError } = require("../utils/throwErrors");

class CallService {
  async start(callerId, receiverId) {
    if (!receiverId) throw throwBadRequestError("Missing receiver");
    logger.info("[CallService] start");
    return callRepository.startCall({ caller: callerId, receiver: receiverId });
  }

  async end(callId) {
    if (!callId) throw throwBadRequestError("Missing callId");
    logger.info("[CallService] end");
    return callRepository.endCall(callId);
  }
}

module.exports = new CallService();
