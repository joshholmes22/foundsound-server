const connectToDatabase = require("../config/connection");
const { Venue, Tag } = require("../models");
const { seedTags } = require("./tag");
const { seedVenues } = require("./venues");

const clearCollections = async () => {
  await Venue.deleteMany({});
  await Tag.deleteMany({});
};

const init = async () => {
  try {
    // connect to DB
    await connectToDatabase();

    // clear all collections
    await clearCollections();

    // seed tags
    await seedTags();

    // seed venues
    await seedVenues();
  } catch (error) {
    console.log(`[ERROR]: Failed to seed DB | ${error.message}`);
  }

  process.exit(0);
};

init();
