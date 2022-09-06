const login = require("./login");
const signup = require("./signup");
const addressLookup = require("./addressLookup");
const createVenue = require("./createVenue");
const deleteTicket = require("./deleteTicket");
const createTicket = require("./createTicket");
const updateTicket = require("./updateTicket");

const resolvers = {
  Query: {
    addressLookup,
  },
  Mutation: {
    login,
    signup,
    createVenue,
    deleteTicket,
    createTicket,
    updateTicket,
  },
};

module.exports = resolvers;
