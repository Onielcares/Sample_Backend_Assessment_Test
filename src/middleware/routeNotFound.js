const { StatusCodes } = require("http-status-codes");
module.exports = {
  routeNotFound: (_req, res) =>
    res.status(StatusCodes.NOT_FOUND).json({ message: "Route not found" }),
};
