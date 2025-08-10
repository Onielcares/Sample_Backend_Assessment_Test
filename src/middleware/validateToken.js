const jwt = require("jsonwebtoken");
const config = require("../config");
const { throwUnauthorizedError } = require("../utils/throwErrors");

function validateAccessToken(req, _res, next) {
  const auth = req.headers.authorization || "";
  const token = auth.startsWith("Bearer ") ? auth.slice(7) : null;
  if (!token)
    return next(throwUnauthorizedError("Missing Authorization header"));
  try {
    const payload = jwt.verify(token, config.JWT_SECRET);
    req.user = payload;
    return next();
  } catch (e) {
    return next(throwUnauthorizedError("Invalid/expired token"));
  }
}

module.exports = { validateAccessToken };
