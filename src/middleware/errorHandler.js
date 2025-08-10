const logger = require("../utils/logger");
const { StatusCodes } = require("http-status-codes");
const { sendErrorResponse } = require("../utils/success-response");

function errorHandler(err, _req, res, _next) {
  const status = err.statusCode || StatusCodes.BAD_REQUEST;
  logger.error(err.message || "Unhandled error", err);
  return sendErrorResponse(
    res,
    { message: err.message || "Something went wrong" },
    status
  );
}

module.exports = { errorHandler };
