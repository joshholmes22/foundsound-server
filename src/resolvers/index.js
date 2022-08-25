const login = require("./login");

const resolvers = {
  Query: {},
  Mutation: {
    login,
  },
};

module.exports = resolvers;
