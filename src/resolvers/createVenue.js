const { ApolloError, AuthenticationError } = require("apollo-server");
const { Venue, AddressLookup, User, EventOrganiser } = require("../models");

const createVenue = async (_, { venueInput }) => {
  try {
    console.log(venueInput);
    const { address, capacity, facilities, userType, _id: id } = venueInput;

    if (!address || !capacity || !facilities) {
      throw new ApolloError("All required fields are not provided!");
    }
    console.log(userType);
    if (userType === "eventOrganiser") {
      const venue = await Venue.create({ address, capacity, facilities });
      console.log(venue);
      await EventOrganiser.findOneAndUpdate(
        { user: id },
        {
          $push: {
            // ?? remember to check if it is correct?
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
