const { ApolloError } = require("apollo-server");

const { Artist, Event } = require("../models");

const artistViewsAd = async (_, __, { viewAd }) => {
  try {
    const ad = await Event.findById(viewAd.id);

    if (ad) {
      return await Artist.find({ postedBy: viewAd.id });
    }

    throw new AuthenticationError("You have no ads.");
  } catch (error) {
    console.log(`[ERROR]: Failed to create advert | ${error.message}`);
    throw new ApolloError("Failed to create advert");
  }
};

module.exports = artistViewsAd;
