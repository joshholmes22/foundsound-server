const { Ad } = require("../models");

const ad = async () => {
  const ad = await Ad.findAll({});

  return ad;
};

module.exports = ad;

// create ad
// find ad by id

// delete to be added later
