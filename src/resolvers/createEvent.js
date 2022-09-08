const { ApolloError } = require("apollo-server");

const { Event } = require("../models");

const createEvent = async (_, { createEventInput }) => {
  try {
    const newEvent = await Event.create(createEventInput);

    console.log("newEvent: " + newEvent);

    const event = await Event.findById(newEvent.get("_id"))
      .populate({
        path: "venue",
        populate: {
          path: "address",
          model: "Address",
        },
      })
      .populate("Tag");

    return event;
  } catch (error) {
    console.log(`[ERROR]: Failed to create event | ${error.message}`);
    throw new ApolloError("Failed to create event");
  }
};

module.exports = createEvent;
