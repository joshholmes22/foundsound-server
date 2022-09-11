const { ApolloError } = require("apollo-server");
const { Artist } = require("../models");

const createArtistProfile = async (
  _,
  { createArtistProfileInput },
  { user }
) => {
  // createArtistProfileInput.user = "631e253820e79a683f11f961";
  createArtistProfileInput.user = user.id;
  const { name, demoSong, tags, rider, artistImage, artistImageName } =
    createArtistProfileInput;

  console.log(createArtistProfileInput);
  try {
    const updateArtist = await Artist.findOneAndUpdate(
      { user: createArtistProfileInput.user },
      { name, demoSong, tags, rider, artistImage, artistImageName },
      { new: true }
    );

    console.log(updateArtist);

    return updateArtist;
  } catch (error) {
    console.log(`[ERROR]: Failed to update Artist | ${error.message}`);
    throw new ApolloError("Failed to update Artist");
  }
};

module.exports = createArtistProfile;
