const login = require("./login");
const signup = require("./signup");

const resolvers = {
  Query: {
    addressLookup,
  },
  Mutation: {
    login,
    signup,
  },
};

module.exports = resolvers;
