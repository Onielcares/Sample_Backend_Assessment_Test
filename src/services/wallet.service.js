const logger = require("../utils/logger");

// Mock OnePipe client
const OnePipe = {
  async createWallet(userId) {
    logger.info(`[WalletService] Creating wallet (mock) for user ${userId}`);
    return {
      walletId: `WAL-${String(userId).slice(-6)}`,
      provider: "onepipe",
      createdAt: new Date(),
    };
  },
  async getBalance(_userId) {
    return { balance: 1000, currency: "NGN" };
  },
};

class WalletService {
  async create(userId) {
    return OnePipe.createWallet(userId);
  }
  async balance(userId) {
    return OnePipe.getBalance(userId);
  }
}

module.exports = new WalletService();
