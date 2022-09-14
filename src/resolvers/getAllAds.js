const { ApolloError } = require("apollo-server");
const { Event } = require("../models");

const getAllAds = async (_) => {
  try {
    let filterAds = [];
    const getAllAds = await Event.find({})
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
    console.log(`[ERROR]: Failed to get all adverts  | ${error.message}`);
    throw new ApolloError("Failed to get all adverts ");
  }

  //   const adverts = adsArray.push(filterAds);
  //   console.log(adverts);
  //   return adverts;
};

module.exports = getAllAds;
