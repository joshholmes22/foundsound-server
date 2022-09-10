const jwt = require("jsonwebtoken");
const { AuthenticationError } = require("apollo-server");

const JWT_SECRET = process.env.JWT_SECRET || "mylocalsecret";
const EXP_TIME = process.env.EXP_TIME || "24h";

const signToken = (payload) => {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: EXP_TIME });
};

const verifyToken = (token) => {
  return jwt.verify(token, JWT_SECRET, { maxAge: EXP_TIME });
};

const authMiddleware = ({ req }) => {
  let token = req.body.token || req.query.token || req.headers.authorization;

  if (req.headers.authorization) {
    token = token.split(" ").pop().trim();
  }

  console.log(token);
  if (!token) {
    return req;
  }

  try {
    const data = jwt.verify(token, JWT_SECRET, { maxAge: EXP_TIME });

    req.user = data;
  } catch (error) {
    console.log(`[ERROR]: Invalid token | ${error.message}`);

    throw new AuthenticationError("Invalid error");
  }

  return req;
};

module.exports = { signToken, verifyToken, authMiddleware };
