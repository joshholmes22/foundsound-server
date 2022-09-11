const login = require("./login");
const signup = require("./signup");
const addressLookup = require("./addressLookup");
const createAdvert = require("./createAdvert");
const createEvent = require("./createEvent");
const getAllEvents = require("./getAllEvents");
const getAnEvent = require("./getAnEvent");
const getAdById = require("./getAdById");

const resolvers = {
  Query: {
    addressLookup,
    getAllEvents,
    getAnEvent,
    getAdById,
  },
  Mutation: {
    login,
    signup,
    createEvent,
    createAdvert,
  },
};

module.exports = resolvers;
