const login = require("./login");
const signup = require("./signup");
const addressLookup = require("./addressLookup");
const createVenue = require("./createVenue");
const deleteEvent = require("./deleteEvent");
const createEvent = require("./createEvent");
const createTag = require("./createTag");
const tags = require("./tags");

const resolvers = {
  Query: {
    addressLookup,
    tags,
  },
  Mutation: {
    login,
    signup,
    createVenue,
    deleteEvent,
    createEvent,
    createTag,
  },
};

module.exports = resolvers;
