const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("../config");

const hashPassword = (plain) => bcrypt.hashSync(plain, 10);
const comparePassword = (plain, hash) => bcrypt.compareSync(plain, hash);

function generateToken(user) {
  return jwt.sign(
    { id: user._id.toString(), email: user.email, name: user.name },
    config.JWT_SECRET,
    { expiresIn: config.JWT_EXPIRES_IN }
  );
}

module.exports = { hashPassword, comparePassword, generateToken };
