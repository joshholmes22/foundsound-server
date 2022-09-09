const { ApolloError } = require("apollo-server");
const { Event } = require("../models");

const createAdvert = async (_, { createAdvertInput }) => {
  try {
    const findAd = await Event.findByIdAndUpdate(
      createAdvertInput.event,
      {
        $push: { adverts: createAdvertInput },
      },
      { new: true }
    ).populate("tags");

    return findAd;
  } catch (error) {
    console.log(`[ERROR]: Failed to create advert | ${error.message}`);
    throw new ApolloError("Failed to create advert");
  }
};

module.exports = createAdvert;
