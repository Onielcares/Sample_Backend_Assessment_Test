function apiAccessAuthMiddleware() {
  return (req, _res, next) => {
    req.hasApiAccess = true; // hook for API key checks if you like
    next();
  };
}
module.exports = { apiAccessAuthMiddleware };
