const { ApolloError } = require("apollo-server");
const { Event } = require("../models");

const getAllEventsForOwner = async (_, { eventOwner }) => {
  try {
    const findEventByOwner = await Event.find({ eventOwner })
      .populate("eventOwner")
      .populate("adverts");

    console.log(findEventByOwner);

    return findEventByOwner;
  } catch (error) {
    console.log(
      `[ERROR]: Failed to find events for event organiser | ${error.message}`
    );

    throw new ApolloError("Failed to find events for event organiser");
  }
};

module.exports = getAllEventsForOwner;
