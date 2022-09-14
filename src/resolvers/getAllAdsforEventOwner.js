const { ApolloError } = require("apollo-server");
const { EventOrganiser } = require("../models");

const getAllAdsForEventOwner = async (_, __, { user }) => {
  try {
    let filterAds = [];
    const getAllAds = await Event.find({ eventOwner: user._id })
      .populate("eventOwner")
      .populate({
        path: "adverts",
        populate: { path: "event", model: "Event" },
      })
      .populate({
        path: "adverts",
        populate: {
          path: "event",
          populate: { path: "eventOwner", model: "User" },
        },
      });

    getAllAds.forEach(({ adverts }) => {
      filterAds = [...filterAds, ...adverts];
    });

    console.log(filterAds);

    return filterAds;
  } catch (error) {
    console.log(`[ERROR]: Failed to get all adverts | ${error.message}`);

    throw new ApolloError("Failed to get all adverts");
  }
};

module.exports = getAllAdsForEventOwner;
