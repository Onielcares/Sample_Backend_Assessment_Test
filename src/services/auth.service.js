const logger = require("../utils/logger");
const { sendSuccessResponse } = require("../utils/success-response");
const {
  registerValidator,
  loginValidator,
  updateProfileValidator,
} = require("../validators/user.validator");
const { comparePassword } = require("../utils/helpers");
const { userRepository } = require("../repository");
const jwt = require("jsonwebtoken");
const config = require("../config");
const {
  throwBadRequestError,
  throwNotFoundError,
} = require("../utils/throwErrors");

class AuthService {
  async register(reqBody) {
    logger.info("[AuthService] Register user");
    const { valid, error } = registerValidator(reqBody);
    if (!valid) throw throwBadRequestError(error);

    const existing = await userRepository.findByEmail(reqBody.email);
    if (existing) throw throwBadRequestError("Email already registered");

    const user = await userRepository.createUser(reqBody); // password hashed in model pre('save')
    const token = jwt.sign(
      { id: user._id, email: user.email, name: user.name },
      config.JWT_SECRET,
      {
        expiresIn: config.JWT_EXPIRES_IN,
      }
    );
    return { user, token };
  }

  async login(reqBody) {
    logger.info("[AuthService] Login user");
    const { valid, error } = loginValidator(reqBody);
    if (!valid) throw throwBadRequestError(error);

    const user = await userRepository.findByEmail(reqBody.email);
    if (!user) throw throwNotFoundError("Invalid credentials");

    const ok = comparePassword(reqBody.password, user.password);
    if (!ok) throw throwNotFoundError("Invalid credentials");

    // Auto-create wallet (mock) could be called here later if you extend the model
    const token = jwt.sign(
      { id: user._id, email: user.email, name: user.name },
      config.JWT_SECRET,
      {
        expiresIn: config.JWT_EXPIRES_IN,
      }
    );
    return { user, token };
  }

  async getProfile(userId) {
    const user = await userRepository.findById(userId);
    if (!user) throw throwNotFoundError("User not found");

    const userValue = {
      name: user.name,
      email: user.email,
    };

    return userValue;
  }

  async updateProfile(userId, updates) {
    const user = await userRepository.findById(userId);
    if (!user) throw throwNotFoundError("User not found");

    const { valid, error, value } = updateProfileValidator(updates);
    if (!valid) throw throwBadRequestError(error);

    const updated = await userRepository.updateUser(userId, value);
    return updated;
  }
}

module.exports = new AuthService();
