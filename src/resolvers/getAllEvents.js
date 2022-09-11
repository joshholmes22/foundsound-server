const { ApolloError, AuthenticationError } = require("apollo-server");
const Event = require("../models/Event");

const getAllEvents = async (_) => {
  try {
    const allEvents = await Event.find({}).populate("eventOwner");
    if (allEvents.length === 0) {
      return null;
    }
    return allEvents;
  } catch (error) {
    console.log(`[ERROR]: Failed to find events | ${error.message}`);

    throw new ApolloError("Failed to find events");
  }
};

module.exports = getAllEvents;
