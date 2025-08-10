const app = require("express");
const messageRouter = app.Router();
const messageController = require("../controllers/message.controller");

// const messageController = new MessageController();

const { validateAccessToken } = require("../middleware/validateToken");

messageRouter.get("/:userId", validateAccessToken, (req, res, next) =>
  messageController.getHistory(req, res, next)
);

module.exports = messageRouter;
