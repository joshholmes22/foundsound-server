const { ApolloError } = require("apollo-server");

const { Event, AddressLookup, User } = require("../models");

const createEvent = async (_, { createEventInput }, { user }) => {
  try {
    createEventInput.eventOwner = user.id;

    const loggedUser = await User.findById(user.id);

    if (loggedUser && loggedUser.userType === "eventOrganiser") {
      const address = await AddressLookup.findOne({
        addresses: {
          $elemMatch: {
            _id: createEventInput.address,
          },
        },
      });

      const yourAddress = address
        .get("addresses")
        .find((address) => address.get("_id").toString() === createEventInput.address);

      const newEvent = await Event.create({
        ...createEventInput,
        address: yourAddress,
      });

      const event = await Event.findById(newEvent.get("_id"));

      return event;
    } else {
      throw new ApolloError("Failed to authenticate user for create event");
    }
  } catch (error) {
    console.log(`[ERROR]: Failed to create event | ${error.message}`);
    throw new ApolloError("Failed to create event");
  }
};

module.exports = createEvent;
