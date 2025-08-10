const User = require("../models/user.model");

async function createUser(data) {
  return User.create(data);
}

async function findByEmail(email) {
  return User.findOne({ email });
}

async function findById(id) {
  return User.findById(id);
}

module.exports = { createUser, findByEmail, findById };
