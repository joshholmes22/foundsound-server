const login = require("./login");
const signup = require("./signup");
const addressLookup = require("./addressLookup");
const createVenue = require("./createVenue");

const resolvers = {
  Query: {
    addressLookup,
  },
  Mutation: {
    login,
    signup,
    createVenue,
  },
};

module.exports = resolvers;
