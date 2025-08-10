const mongoose = require("mongoose");
const { hashPassword } = require("../utils/helpers");

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

userSchema.pre("save", function (next) {
  if (this.isModified("password")) {
    this.password = hashPassword(this.password);
  }
  next();
});

module.exports = mongoose.model("User", userSchema);
