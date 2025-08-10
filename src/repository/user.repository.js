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

async function updateUser(id, updates) {
  return User.findByIdAndUpdate(
    id,
    { $set: updates },
    { new: true, runValidators: true }
  );
}

module.exports = { createUser, findByEmail, findById, updateUser };
