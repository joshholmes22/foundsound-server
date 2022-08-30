const login = require("./login");
const signup = require("./signup");

const resolvers = {
  Query: {},
  Mutation: {
    login,
    signup,
  },
};

module.exports = resolvers;
