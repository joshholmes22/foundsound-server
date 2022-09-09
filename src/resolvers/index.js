const login = require("./login");
const signup = require("./signup");
const addressLookup = require("./addressLookup");
const createAd = require("./createAd");
const deleteEvent = require("./deleteEvent");
const createEvent = require("./createEvent");
const getAllEvents = require("./getAllEvents");

const resolvers = {
  Query: {
    addressLookup,
    getAllEvents,
  },
  Mutation: {
    login,
    signup,
    deleteEvent,
    createEvent,
    createAd,
  },
};

module.exports = resolvers;
