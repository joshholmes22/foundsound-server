const { Tag } = require("../models");

const tags = [
  {
    name: "Wembley",
  },
  {
    name: "Anfield",
  },
  {
    name: "NEC Arena",
  },
  {
    name: "Upton Park",
  },
  {
    name: "Goodison Park",
  },
  {
    name: "Edgebaston",
  },
  {
    name: "Oracle Arena",
  },
  {
    name: "Maddison Square Garden",
  },
  {
    name: "Boston Garden",
  },
  {
    name: "02 Academy",
  },
  {
    name: "Staduim of Light",
  },
];

const seedTags = async () => {
  await Tag.insertMany(tags);

  console.log("[INFO]: Successfully seeded tags");
};

module.exports = { seedTags };
