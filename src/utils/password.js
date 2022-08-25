const bcrypt = require("bcrypt");

const hashPassword = async function (next) {
  if (this.isNew || this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
};

const validatePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

module.exports = {
  hashPassword,
  validatePassword,
};
