const { ApolloError } = require("apollo-server");
const { Artist } = require("../models");

const createArtistProfile = async (
  _,
  { createArtistProfileInput },
  { user }
) => {
  try {
    createArtistProfileInput.user = user.id;
    await Artist.findByIdAndUpdate(user.id, {
      $push: { createArtistProfileInput },
    }).populate("artists");
  } catch (error) {
    console.log(`[ERROR]: Failed to update Artist | ${error.message}`);
    throw new ApolloError("Failed to update Artist");
  }
};

module.exports = createArtistProfile;
