const login = require("./login");
const signup = require("./signup");
const addressLookup = require("./addressLookup");
const createVenue = require("./createVenue");
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
    createVenue,
    deleteEvent,
    createEvent,
  },
};

module.exports = resolvers;
