const { ApolloError } = require("apollo-server");
const { Event } = require("../models");

const getAllEventsForOwner = async (_, { eventOwner }) => {
  try {
    const findEventByOwner = await Event.find({ eventOwner: eventOwner });

    return findEventByOwner;
  } catch (error) {
    console.log(
      `[ERROR]: Failed to find events for event organiser | ${error.message}`
    );

    throw new ApolloError("Failed to find events for event organiser");
  }
};

module.exports = getAllEventsForOwner;
