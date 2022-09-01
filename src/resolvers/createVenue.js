const { ApolloError } = require("apollo-server");
const { Venue, AddressLookup } = require("../models");

const createVenue = async (_, { input }) => {
  try {
    const { address, capacity, facilities } = input;

    // find by id/ formatted address ??!?!

    const formatAddress = AddressLookup.find();

    if (!address && !capacity && !facilities) {
      throw new ApolloError("All required fields are not provided!");
    }

    const venue = await Venue.create({ address, capacity, facilities });

    return venue;
  } catch (error) {
    console.log(`[ERROR]: Failed to create venue | ${error.message}`);

    throw new ApolloError("Failed to create venue");
  }
};

module.exports = createVenue;
