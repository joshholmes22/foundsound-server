const bcrypt = require("bcrypt");
const { Schema, model } = require("mongoose");

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
  phoneNumber: {
    type: String,
    required: true,
    minLength: 8,
    maxLength: 20,
    trim: true,
  },
  socialMedia: {
    type: String,
    required: true,
    trim: true,
  },
  imageUrl: {
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
schema.method("checkPassword", async function (password) {
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

const User = model("User", schema);

module.exports = User;
