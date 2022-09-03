const { ApolloError, AuthenticationError } = require("apollo-server");
const { Venue, AddressLookup, User, EventOrganiser } = require("../models");

const createVenue = async (_, { input }) => {
  try {
    const { address, capacity, facilities, user, id } = input;

    if (!address && !capacity && !facilities) {
      throw new ApolloError("All required fields are not provided!");
    }

    if (user === "eventOrganiser") {
      const venue = await Venue.create({ address, capacity, facilities });

      const updateEventOrganiser = await EventOrganiser.findByIdAndUpdate(id, {
        $push: {
          // ?? remember to check if it is correct?
          venue: [...venue],
        },
      });
      return { venue, updateEventOrganiser };
    } else {
      throw new AuthenticationError("Unauthorized access");
    }
  } catch (error) {
    console.log(`[ERROR]: Failed to create venue | ${error.message}`);

    throw new ApolloError("Failed to create venue");
  }
};

module.exports = createVenue;
