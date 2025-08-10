const { StatusCodes } = require("http-status-codes");
const { sendSuccessResponse } = require("../utils/success-response");
const logger = require("../utils/logger");
const walletService = require("../services/wallet.service");

class WalletController {
  async create(req, res, next) {
    logger.info("[WalletController] Create wallet");
    try {
      const data = await walletService.create(req.user.id);
      return sendSuccessResponse(
        res,
        { message: "Wallet created", data },
        StatusCodes.CREATED
      );
    } catch (error) {
      return next(error);
    }
  }

  async balance(req, res, next) {
    logger.info("[WalletController] Wallet balance");
    try {
      const data = await walletService.balance(req.user.id);
      return sendSuccessResponse(res, { message: "Wallet balance", data });
    } catch (error) {
      return next(error);
    }
  }
}

module.exports = new WalletController();
