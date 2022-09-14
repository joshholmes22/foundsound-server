const login = require("./login");
const signup = require("./signup");
const addressLookup = require("./addressLookup");
const createAdvert = require("./createAdvert");
const createEvent = require("./createEvent");
const getAllEvents = require("./getAllEvents");
const getAnEvent = require("./getAnEvent");
const getAdById = require("./getAdById");
const createArtistProfile = require("./createArtistProfile");
const getAllEventsForOwner = require("./getAllEventsForOwner");
const advertResponses = require("./advertResponses");
const getArtist = require("./getArtistById");
const getAllAds = require("./getAllAds");

const resolvers = {
  Query: {
    addressLookup,
    getAllEvents,
    getAllAds,
    getAnEvent,
    getAdById,
    getAllEventsForOwner,
    getArtist,
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
