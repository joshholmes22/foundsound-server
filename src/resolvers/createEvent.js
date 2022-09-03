const { Venue, Tag, Event } = require("../models");

const createEvent = async (_, { input }) => {
  try {
    const {
      name,
      description,
      startDateTime,
      endDateTime,
      venue,
      imageUrl,
      tags,
      price,
    } = input;

    if (!input) {
      throw new ApolloError("All required fields are not provided!");
    }

    if (input) {
      const event = await Event.create({
        name,
        description,
        startDateTime,
        endDateTime,
        venue,
        imageUrl,
        tags,
        price,
      });

      return { event };
    }
  } catch (error) {
    console.log(`[ERROR]: Failed to create venue | ${error.message}`);

    throw new ApolloError("Failed to create venue");
  }
};

module.exports = createEvent;
