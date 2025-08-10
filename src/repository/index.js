const {
  createUser,
  findByEmail,
  findById,
  updateUser,
} = require("./user.repository");
const messageRepository = require("./message.repository");
const callRepository = require("./call.repository");

module.exports = {
  userRepository: { createUser, findByEmail, findById, updateUser },
  messageRepository,
  callRepository,
};
