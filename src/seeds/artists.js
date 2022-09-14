const { Artist } = require("../models");

const artists = [
  {
    name: "Amirtha",
    user: "1",
    rider: "yes",
    artistImage:
      "https://images.unsplash.com/photo-1598519503006-1065f1fbe564?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGJhbmRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    artistImageName: "AmirthaImage",
    demoSong: [""],
    tags: [{ name: "rock" }, { name: "indie" }],
  },
  {
    name: "Roxy",
    user: "2",
    rider: "yes",
    artistImage: "",
    artistImageName: "RoxyImage",
    demoSong: [""],
    tags: [{ name: "blues" }, { name: "harmony" }],
  },
  {
    name: "Josh",
    user: "2",
    rider: "yes",
    artistImage: "",
    artistImageName: "JoshImage",
    demoSong: [""],
    tags: [{ name: "country" }, { name: "calm" }],
  },
  {
    name: "Tanveer",
    user: "3",
    rider: "no",
    artistImage: "",
    artistImageName: "TanveeImage",
    demoSong: [""],
    tags: [{ name: "death metal" }, { name: "goth" }],
  },
  {
    name: "Zahra",
    user: "4",
    rider: "yes",
    artistImage: "",
    artistImageName: "ZahraImage",
    demoSong: [""],
    tags: [{ name: "punk" }, { name: "ska" }],
  },
  {
    name: "Sophia",
    user: "5",
    rider: "yes",
    artistImage: "",
    artistImageName: "",
    demoSong: [""],
    tags: [{ name: "reggae" }, { name: "ska" }],
  },
  {
    name: "Alex",
    user: "6",
    rider: "no",
    artistImage: "",
    artistImageName: "",
    demoSong: [""],
    tags: [{ name: "low-fi" }, { name: "relax" }],
  },
  {
    name: "Bob",
    user: "7",
    rider: "no",
    artistImage: "",
    artistImageName: "",
    demoSong: [""],
    tags: [{ name: "grunge" }, { name: "nineties" }],
  },
  {
    name: "John",
    user: "8",
    rider: "yes",
    artistImage: "",
    artistImageName: "",
    demoSong: [""],
    tags: [{ name: "funk" }, { name: "soul" }],
  },
  {
    name: "Lola",
    user: "9",
    rider: "no",
    artistImage: "",
    artistImageName: "",
    demoSong: [""],
    tags: [{ name: "soul" }, { name: "romance" }],
  },
  {
    name: "Jackson",
    user: "10",
    rider: "yes",
    artistImage: "",
    artistImageName: "",
    demoSong: [""],
    tags: [{ name: "space" }, { name: "electro" }],
  },
];

const seedArtists = async () => {
  await Artist.insertMany(artists);

  console.log("[INFO]: Successfully seeded tags");
};

module.exports = { seedArtists };
