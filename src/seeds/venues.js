const { Venue } = require("../models");

const venues = [
  {
    address: "6317a7c3779b0f641db3254f",
    capacity: "1",
    facilities: "isAcessibile",
  },
  {
    address: "6317a7c3779b0f641db3254f",
    capacity: "1",
    facilities: "hasFood",
  },
  {
    address: "6317a7c3779b0f641db3254f",
    capacity: "1",
    facilities: "hasCurfew",
  },
  {
    address: "6317a7c3779b0f641db3254f",
    capacity: "1",
    facilities: "isAcessibile",
  },
];

const seedVenues = async () => {
  await Venue.insertMany(venues);

  console.log("[INFO]: Successfully seeded venues");
};

module.exports = { seedVenues };
