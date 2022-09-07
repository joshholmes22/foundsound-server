const login = require("./login");
const signup = require("./signup");
const addressLookup = require("./addressLookup");
<<<<<<< HEAD
const ad = require("./ad");
=======
const createVenue = require("./createVenue");
const deleteEvent = require("./deleteEvent");
const createEvent = require("./createEvent");
>>>>>>> b7a56649ac6d0633cece488ddc80d5193c9a1394

const resolvers = {
  Query: {
    addressLookup,
  },
  Mutation: {
    login,
    signup,
<<<<<<< HEAD
    ad,
=======
    createVenue,
    deleteEvent,
    createEvent,
>>>>>>> b7a56649ac6d0633cece488ddc80d5193c9a1394
  },
};

module.exports = resolvers;
