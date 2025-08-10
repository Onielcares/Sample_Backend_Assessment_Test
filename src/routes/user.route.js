const app = require("express");
const authRouter = app.Router();
const authController = require("../controllers/auth.controller");

// const authController = new AuthController();

// Auth
authRouter.post("/signup", (req, res, next) =>
  authController.registerUser(req, res, next)
);
authRouter.post("/login", (req, res, next) =>
  authController.login(req, res, next)
);

const { validateAccessToken } = require("../middleware/validateToken");

authRouter.get("/profile", validateAccessToken, (req, res, next) =>
  authController.getProfile(req, res, next)
);
authRouter.put("/profile", validateAccessToken, (req, res, next) =>
  authController.updateProfile(req, res, next)
);

module.exports = authRouter;
