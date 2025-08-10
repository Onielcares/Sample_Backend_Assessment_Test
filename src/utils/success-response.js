// const { StatusCodes } = require("http-status-codes");

// function sendSuccessResponse(res, payload = {}, status = StatusCodes.OK) {
//   return res.status(status).json({ success: true, ...payload });
// }

// function sendErrorResponse(
//   res,
//   payload = {},
//   status = StatusCodes.BAD_REQUEST
// ) {
//   return res.status(status).json({ success: false, ...payload });
// }

// module.exports = { sendSuccessResponse, sendErrorResponse };

const { StatusCodes } = require("http-status-codes");

function sendSuccessResponse(res, payload = {}, status = StatusCodes.OK) {
  const { message = "OK", data = null } = payload;
  return res.status(status).json({
    success: true,
    status,
    message,
    data,
  });
}

function sendErrorResponse(
  res,
  payload = {},
  status = StatusCodes.BAD_REQUEST
) {
  const { message = "Bad Request", data = null, errors = null } = payload;
  return res.status(status).json({
    success: false,
    status,
    message,
    data,
  });
}

module.exports = { sendSuccessResponse, sendErrorResponse };
