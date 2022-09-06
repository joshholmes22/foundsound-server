const { ApolloError, AuthenticationError } = require("apollo-server");
const { Event } = require("../models/Event");

const getAllEvents = async (_, { input }) => {
  try {
    const allEvents = await Event.findAll({});
    if (allEvents) {
      return { success: true, allEvents };
    } else {
      throw new AuthenticationError("No events");
    }
  } catch (error) {
    console.log(`[ERROR]: Failed to find events | ${error.message}`);

    throw new ApolloError("Failed to find events");
  }
};

module.exports = getAllEvents;
