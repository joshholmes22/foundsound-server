const login = require("./login");
const signup = require("./signup");
const addressLookup = require("./addressLookup");
const createVenue = require("./createVenue");
const createAd = require("./createAd");
const deleteEvent = require("./deleteEvent");
const createEvent = require("./createEvent");

const resolvers = {
  Query: {
    addressLookup,
  },
  Mutation: {
    login,
    signup,
    createVenue,
    deleteEvent,
    createEvent,
    createAd,
  },
};

module.exports = resolvers;
