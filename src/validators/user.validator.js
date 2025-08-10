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

const updateProfileSchema = Joi.object({
  name: Joi.string(),
  phone: Joi.string().trim(),
  email: Joi.string().email({ tlds: { allow: false } }),
  avatar: Joi.string().uri().allow(""),
}).min(1);

function registerValidator(data) {
  const { error } = registerSchema.validate(data);
  return { valid: !error, error: error?.message };
}

function loginValidator(data) {
  const { error } = loginSchema.validate(data);
  return { valid: !error, error: error?.message };
}
function updateProfileValidator(data) {
  const { error, value } = updateProfileSchema.validate(data, {
    abortEarly: false,
    stripUnknown: true,
  });
  return { valid: !error, error: error?.message, value };
}

module.exports = { registerValidator, loginValidator, updateProfileValidator };
