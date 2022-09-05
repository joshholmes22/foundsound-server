const login = require("./login");
const signup = require("./signup");
const addressLookup = require("./addressLookup");
const ad = require("./ad");
const createEvent = require("./createEvent");

const resolvers = {
  Query: {
    addressLookup,
  },
  Mutation: {
    login,
    signup,
    // ad,
    createEvent,
  },
};

module.exports = resolvers;
