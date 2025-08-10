const app = require("express");
const walletRouter = app.Router();
const walletController = require("../controllers/wallet.controller");

// const walletController = new WalletController();

const { validateAccessToken } = require('../middleware/validateToken');

walletRouter.post("/create", validateAccessToken, (req, res, next) =>
  walletController.create(req, res, next)
);
walletRouter.get("/balance", validateAccessToken, (req, res, next) =>
  walletController.balance(req, res, next)
);

module.exports = walletRouter;
