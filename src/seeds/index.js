const connectToDatabase = require("../config/connection");
const { Tag } = require("../models");
const { Artist } = require("../models");
const { seedTags } = require("./tag");
const { seedArtists } = require("./artists");

const clearCollections = async () => {
  await Tag.deleteMany({});
  await Artist.deleteMany({});
};

const init = async () => {
  try {
    // connect to DB
    await connectToDatabase();

    // clear all collections
    await clearCollections();

    // seed tags
    await seedTags();
  } catch (error) {
    console.log(`[ERROR]: Failed to seed DB | ${error.message}`);
  }

  process.exit(0);
};

init();
