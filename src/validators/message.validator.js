const Joi = require("joi");

const messageSchema = Joi.object({
  from: Joi.string().required(),
  to: Joi.string().required(),
  content: Joi.string().required(),
});

function messageValidator(data) {
  const { error } = messageSchema.validate(data);
  return { valid: !error, error: error?.message };
}

module.exports = { messageValidator };
