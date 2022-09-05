const { Venue, Tag, Event } = require("../models");

const createEvent = async (_, { eventInput }) => {
  try {
    if (!input) {
      throw new ApolloError("All required fields are not provided!");
    }

    if (input) {
      const event = await Event.create({
        ...eventInput,
      });

      return { event };
    }
  } catch (error) {
    console.log(`[ERROR]: Failed to create venue | ${error.message}`);

    throw new ApolloError("Failed to create venue");
  }
};

module.exports = createEvent;
