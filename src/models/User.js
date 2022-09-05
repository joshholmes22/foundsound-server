const bcrypt = require("bcrypt");
const { Schema, model } = require("mongoose");

const { hashPassword, validatePassword } = require("../utils/password");

const userSchema = {
  firstName: {
    type: String,
    required: true,
    minLength: 2,
    maxLength: 50,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    minLength: 2,
    maxLength: 50,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    minLength: 2,
    maxLength: 100,
    trim: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minLength: 8,
    maxLength: 50,
    trim: true,
  },
  socialMedia: {
    type: String,
    trim: true,
  },
  imageUrl: {
    type: String,
    default:
      "https://images.unsplash.com/photo-1543373014-cfe4f4bc1cdf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2848&q=80",
    trim: true,
  },
  imageFileName: {
    type: String,
    required: true,
    trim: true,
  },
  userType: {
    type: String,
    required: true,
    enum: ["eventOrganiser", "admin", "artist", "audienceMember"],
  },
};

const schema = new Schema(userSchema);
schema.method("hashPassword", async function (password) {
  const isValid = await bcrypt.compare(password, this.password);
  return isValid;
});

schema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const password = await bcrypt.hash(this.password, 10);
    this.password = password;
  }

  next();
});

// schema.pre("save", hashPassword);

// schema.methods.validatePassword = validatePassword;

const User = model("User", schema);

module.exports = User;
