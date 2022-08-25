const jwt = require("jsonwebtoken");

const JWT_SECRET = process.env.JWT_SECRET || "mylocalsecret";
const EXP_TIME = process.env.EXP_TIME || "24h";

const tokenise = (payload) => {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: EXP_TIME });
};

const verifyToken = (token) => {
  return jwt.verify(token, JWT_SECRET, { maxAge: EXP_TIME });
};

module.exports = { tokenise, verifyToken };
