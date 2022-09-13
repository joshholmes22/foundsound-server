const login = require("./login");
const signup = require("./signup");
const addressLookup = require("./addressLookup");
const createAdvert = require("./createAdvert");
const createEvent = require("./createEvent");
const getAllEvents = require("./getAllEvents");
const getAnEvent = require("./getAnEvent");
const createArtistProfile = require("./createArtistProfile");
const getAllEventsForOwner = require("./getAllEventsForOwner");
const advertResponses = require("./advertResponses");

const resolvers = {
  Query: {
    addressLookup,
    getAllEvents,
    getAnEvent,
    getAllEventsForOwner,
  },
  Mutation: {
    login,
    signup,
    createEvent,
    createAdvert,
    createArtistProfile,
    advertResponses,
  },
};

module.exports = resolvers;
