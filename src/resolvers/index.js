const login = require("./login");
const signup = require("./signup");
const addressLookup = require("./addressLookup");
const createVenue = require("./createVenue");
const getAllEvents = require("./getAllEvents");

const resolvers = {
  Query: {
    addressLookup,
    getAllEvents,
  },
  Mutation: {
    login,
    signup,
    createVenue,
  },
};

module.exports = resolvers;
