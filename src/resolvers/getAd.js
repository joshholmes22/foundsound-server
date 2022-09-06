const { ApolloError } = require("apollo-server");
const { Ad } = require("../models");

const getAd = async (_, { adInput }) => {
  try {
    if (!adInput) {
      throw new ApolloError("All required fields are not provided!");
    } else {
      const ad = await Ad.findOne({
        ...adInput,
      });

      return ad;
    }
  } catch (error) {
    console.log(`[ERROR]: Failed to find ad | ${error.message}`);

    throw new ApolloError("Failed to find ad");
  }
};

module.exports = createAd;
