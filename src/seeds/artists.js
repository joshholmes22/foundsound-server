const { Artist, User } = require("../models");

const { faker } = require("@faker-js/faker");

const seedArtists = async () => {
  const artistsDb = await User.find({
    userType: "artist",
  });

  const artists = artistsDb.map((user) => {
    return {
      name: faker.internet.userName(),
      user: user._id,
      rider: "yes",
      artistImage: [
        "https://media.istockphoto.com/photos/rock-band-silhouette-picture-id144220369?b=1&k=20&m=144220369&s=170667a&w=0&h=zltv8TtjArhuXhNAVUSpi4c2NqnXc3hBqcJfUyBDNpA=",
        "https://images.unsplash.com/photo-1618859437290-dc3cda39ea58?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c291bHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      ],
      demoSong: ["spotify:track:3AVXwaOGCEL8cmBecfcsFJ"],
      tags: [{ name: "space" }, { name: "electro" }],
    };
  });

  await Artist.insertMany(artists);

  console.log("[INFO]: Successfully seeded tags");
};

module.exports = { seedArtists };
