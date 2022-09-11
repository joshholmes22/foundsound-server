const { ApolloError } = require("apollo-server");
const { Artist } = require("../models");

const createArtistProfile = async (
  _,
  { createArtistProfileInput },
  { user }
) => {
  createArtistProfileInput.user = "631db84abeb1abad880f6975";
  const { name, demoSong, tags, rider, artistImage, artistImageName } =
    createArtistProfileInput;
  try {
    const updateArtist = await Artist.findOneAndUpdate(
      { user: createArtistProfileInput.user },
      {
        $push: {
          name: name,
          demoSong: demoSong,
          tags: [tags],
          rider: rider,
          artistImage: artistImage,
          artistImageName: artistImageName,
        },
      }
    );

    console.log(updateArtist);

    // return updateArtist;
  } catch (error) {
    console.log(`[ERROR]: Failed to update Artist | ${error.message}`);
    throw new ApolloError("Failed to update Artist");
  }
};

module.exports = createArtistProfile;
