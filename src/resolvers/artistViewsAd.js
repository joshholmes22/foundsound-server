const { ApolloError } = require("apollo-server");

const { Artist, Advert } = require("../models");

const artistViewsAd = async (_) => {
  try {
    const allEvents = await Advert.find({}).populate("event");
    if (allEvents.length === 0) {
      return null;
    }
    return allEvents;
  } catch (error) {
    console.log(`[ERROR]: Failed to find events | ${error.message}`);

    throw new ApolloError("Failed to find events");
  }
};

module.exports = artistViewsAd;
