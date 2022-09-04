const { ApolloError, AuthenticationError } = require("apollo-server");
const { Venue, AddressLookup, User, EventOrganiser } = require("../models");

const createVenue = async (_, { venueInput }) => {
  try {
    const { address, capacity, facilities, userType, _id: id } = venueInput;

    if (!address || !capacity || !facilities) {
      throw new ApolloError("All required fields are not provided!");
    }

    if (userType === "eventOrganiser") {
      const venue = await Venue.create({ address, capacity, facilities });

      await EventOrganiser.findOneAndUpdate(
        { user: id },
        {
          $push: {
            venue: { ...venue },
          },
        }
      );
      return { success: true };
    } else {
      throw new AuthenticationError("Unauthorized access");
    }
  } catch (error) {
    console.log(`[ERROR]: Failed to create venue | ${error.message}`);

    throw new ApolloError("Failed to create venue");
  }
};

module.exports = createVenue;
