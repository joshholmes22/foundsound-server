const login = require("./login");
const signup = require("./signup");
const addressLookup = require("./addressLookup");
const createVenue = require("./createVenue");
const deleteEvent = require("./deleteEvent");

const resolvers = {
  Query: {
    addressLookup,
  },
  Mutation: {
    login,
    signup,
    createVenue,
    deleteEvent,
  },
};

module.exports = resolvers;
