const connectToDatabase = require("../config/connection");
const { Tag, Artist, User } = require("../models");

const { seedTags } = require("./tag");
const { seedArtists } = require("./artists");
const { seedUsers } = require("./users");

const clearCollections = async () => {
  await Tag.deleteMany({});
  await Artist.deleteMany({});
  await User.deleteMany({});
};

const init = async () => {
  try {
    // connect to DB
    await connectToDatabase();

    // clear all collections
    await clearCollections();

    // seed tags
    await seedTags();
    //seed users
    await seedUsers();
    // seed artists
    await seedArtists();
  } catch (error) {
    console.log(`[ERROR]: Failed to seed DB | ${error.message}`);
  }

  process.exit(0);
};

init();
