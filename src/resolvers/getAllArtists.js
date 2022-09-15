const { Artist } = require("../models");

const getAllArtists = async (_, __, ___) => {
  try {
    const artist = await Artist.find({}).populate("user");
    console.log(artist);

    return artist;
  } catch (error) {
    console.log(`[ERROR]: Failed to find artists| ${error.message}`);

    throw new ApolloError("Failed to find artists");
  }
};

module.exports = getAllArtists;
