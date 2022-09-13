const { ApolloError } = require("apollo-server");
const { Artist } = require("../models");

const getArtist = async (_, { artistId }) => {
  try {
    const artist = await Artist.findOne({ user: artistId }).populate("user");

    return artist;
  } catch (error) {
    console.log(`[ERROR]: Failed to find artist| ${error.message}`);

    throw new ApolloError("Failed to find artist");
  }
};

module.exports = getArtist;
