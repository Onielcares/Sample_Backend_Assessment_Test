const { StatusCodes } = require("http-status-codes");
const { sendSuccessResponse } = require("../utils/success-response");
const logger = require("../utils/logger");
const authService = require("../services/auth.service");

class AuthController {
  async registerUser(req, res, next) {
    logger.info("[AuthController] Register User");
    try {
      const result = await authService.register(req.body);
      return sendSuccessResponse(
        res,
        {
          message: "User registered successfully",
          data: result,
        },
        StatusCodes.CREATED
      );
    } catch (error) {
      return next(error);
    }
  }

  async login(req, res, next) {
    logger.info("[AuthController] Login User");
    try {
      const result = await authService.login(req.body);
      return sendSuccessResponse(res, {
        message: "Login successful",
        data: result,
      });
    } catch (error) {
      return next(error);
    }
  }

  async getProfile(req, res, next) {
    logger.info("[AuthController] Get Profile");
    try {
      const data = await authService.getProfile(req.user.id);
      return sendSuccessResponse(res, { message: "Profile fetched", data });
    } catch (error) {
      return next(error);
    }
  }

  async updateProfile(req, res, next) {
    logger.info("[AuthController] Update Profile");
    try {
      const data = await authService.updateProfile(req.user.id, req.body);
      return sendSuccessResponse(res, { message: "Profile updated", data });
    } catch (error) {
      return next(error);
    }
  }
}

module.exports = new AuthController();
