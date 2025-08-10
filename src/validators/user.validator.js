const Joi = require("joi");

const registerSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

function registerValidator(data) {
  const { error } = registerSchema.validate(data);
  return { valid: !error, error: error?.message };
}

function loginValidator(data) {
  const { error } = loginSchema.validate(data);
  return { valid: !error, error: error?.message };
}

module.exports = { registerValidator, loginValidator };
