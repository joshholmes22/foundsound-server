const { Ad } = require("../models");

const ad = async () => {
  const ad = await Ad.find({});

  return ad;
};

module.exports = ad;
