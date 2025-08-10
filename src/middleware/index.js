const { requestLogger } = require("./requestLogger");
const { apiAccessAuthMiddleware } = require("./api-access.auth");
const { correlationIdMiddleware } = require("./correlation-id-middleware");
const { routeNotFound } = require("./routeNotFound");
const { errorHandler } = require("./errorHandler");
const { validateAccessToken } = require("./validateToken");

module.exports = {
  requestLogger,
  apiAccessAuthMiddleware,
  correlationIdMiddleware,
  routeNotFound,
  errorHandler,
  validateAccessToken,
};
