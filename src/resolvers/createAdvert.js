const { ApolloError } = require("apollo-server");
const { Ad } = require("../models");

const createAd = async (_, { adInput }) => {
  try {
    if (!adInput) {
      throw new ApolloError("All required fields are not provided!");
    } else {
      const ad = await Ad.create({
        ...adInput,
      });

      return ad;
    }
  } catch (error) {
    console.log(`[ERROR]: Failed to create ad | ${error.message}`);

    throw new ApolloError("Failed to create ad");
  }
};

module.exports = createAd;
