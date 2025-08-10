const app = require("express");
const callRouter = app.Router();
const callController = require("../controllers/call.controller");

// const callController = new CallController();

const { validateAccessToken } = require('../middleware/validateToken');

callRouter.post("/start", validateAccessToken, (req, res, next) =>
  callController.start(req, res, next)
);
callRouter.post("/end", validateAccessToken, (req, res, next) =>
  callController.end(req, res, next)
);

module.exports = callRouter;
