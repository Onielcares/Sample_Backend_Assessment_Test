class BaseError extends Error {
  constructor(message, statusCode = 400) {
    super(message);
    this.statusCode = statusCode;
  }
}
const throwBadRequestError = (msg) => new BaseError(msg || "Bad request", 400);
const throwUnauthorizedError = (msg) =>
  new BaseError(msg || "Unauthorized", 401);
const throwForbiddenError = (msg) => new BaseError(msg || "Forbidden", 403);
const throwNotFoundError = (msg) => new BaseError(msg || "Not found", 404);
const throwConflictError = (msg) => new BaseError(msg || "Conflict", 409);

module.exports = {
  BaseError,
  throwBadRequestError,
  throwUnauthorizedError,
  throwForbiddenError,
  throwNotFoundError,
  throwConflictError,
};
