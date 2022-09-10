const { ApolloError } = require("apollo-server");
const { Event } = require("../models");

const getAnEvent = async (_, { eventId }) => {
  try {
    const event = await Event.findById(eventId).populate("tags");

    return event;
  } catch (error) {
    console.log(`[ERROR]: Failed to find an event | ${error.message}`);

    throw new ApolloError("Failed to find an event");
  }
};

module.exports = getAnEvent;
