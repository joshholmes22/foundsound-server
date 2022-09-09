const { ApolloError } = require("apollo-server");

const { Event, AddressLookup } = require("../models");

const createEvent = async (_, { createEventInput }) => {
  try {
    const address = await AddressLookup.findOne({
      addresses: {
        $elemMatch: {
          _id: createEventInput.address,
        },
      },
    });

    const yourAddress = address
      .get("addresses")
      .find(
        (address) => address.get("_id").toString() === createEventInput.address
      );

    const newEvent = await Event.create({
      ...createEventInput,
      address: yourAddress,
    });

    const event = await Event.findById(newEvent.get("_id")).populate("tags");

    return event;
  } catch (error) {
    console.log(`[ERROR]: Failed to create event | ${error.message}`);
    throw new ApolloError("Failed to create event");
  }
};

module.exports = createEvent;
