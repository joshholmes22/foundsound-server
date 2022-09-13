const { ApolloError } = require("apollo-server");
const { Event } = require("../models");

const adById = async (_, { adId, eventId }) => {
  const getAd = await Event.findOne({
    _id: eventId,
    adverts: {
      $elemMatch: {
        _id: adId,
      },
    },
  }).populate("eventOwner");

  return getAd;
};

module.exports = adById;
