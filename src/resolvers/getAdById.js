const { ApolloError } = require("apollo-server");
const { Advert } = require("../models");

const adById = async (_, { getAdById }) => {
  const getAd = await Advert.findById(getAdById);

  return getAd;
};

module.exports = adById;
