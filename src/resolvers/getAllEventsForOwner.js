const { ApolloError, AuthenticationError } = require("apollo-server");
const { Event } = require("../models");

const getAllEventsForOwner = async (_, __, { user }) => {
  try {
    if (!user) {
      throw new AuthenticationError("unauthorized user");
    }

    const findEventByOwner = await Event.find({ eventOwner: user.id })

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
