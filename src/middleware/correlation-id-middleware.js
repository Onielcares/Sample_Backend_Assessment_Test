const { v4: uuid } = require("uuid");
function correlationIdMiddleware() {
  return (req, _res, next) => {
    req.correlationId = req.headers["x-correlation-id"] || uuid();
    next();
  };
}
module.exports = { correlationIdMiddleware };
