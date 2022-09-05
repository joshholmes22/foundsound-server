const login = require("./login");
const signup = require("./signup");
const addressLookup = require("./addressLookup");
const ad = require("./ad");

const resolvers = {
  Query: {
    addressLookup,
  },
  Mutation: {
    login,
    signup,
    ad,
  },
};

module.exports = resolvers;
