const { Artist } = require("../models");

const artists = [
  {
    name: "Amirtha",
    user: "1",
    rider: "yes",
    artistImage: [
      "https://images.unsplash.com/photo-1598519503006-1065f1fbe564?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGJhbmRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1536596662079-12ab3d957913?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bW9vZHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    ],
    demoSong: ["spotify:track:6ebkx7Q5tTxrCxKq4GYj0Y"],
    tags: [{ name: "rock" }, { name: "indie" }],
  },
  {
    name: "Roxy",
    user: "2",
    rider: "yes",
    artistImage: [
      "https://images.unsplash.com/photo-1584762017375-9125b7918bdc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YmFuZHN8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60",
      "https://images.unsplash.com/photo-1518156677180-95a2893f3e9f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bW9vZHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    ],
    demoSong: ["spotify:track:7nuQ1LgM6l5FLaJmlODoqj"],
    tags: [{ name: "blues" }, { name: "harmony" }],
  },
  {
    name: "Josh",
    user: "2",
    rider: "yes",
    artistImage: [
      "https://images.unsplash.com/photo-1552915063-2d9ec21c2d85?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YmFuZHN8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60",
      "https://images.unsplash.com/photo-1518352724948-729151797553?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8bW9vZHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    ],
    demoSong: ["spotify:track:0afhq8XCExXpqazXczTSve"],
    tags: [{ name: "country" }, { name: "calm" }],
  },
  {
    name: "Tanveer",
    user: "3",
    rider: "no",
    artistImage: [
      "https://images.unsplash.com/flagged/photo-1576064535245-9a9fec9cfe11?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YmFuZHN8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60",
      "https://images.unsplash.com/photo-1521134521200-c7c4b0d22ab7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fG1vb2R5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    ],
    demoSong: [""],
    tags: [{ name: "death metal" }, { name: "goth" }],
  },
  {
    name: "Zahra",
    user: "4",
    rider: "yes",
    artistImage: [
      "https://images.unsplash.com/photo-1592197871261-fc1c6d3f9972?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YmFuZHN8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60",
      "https://images.unsplash.com/photo-1529160749550-7bae16dc4d7b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fG1vb2R5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    ],
    demoSong: ["spotify:track:2DB4DdfCFMw1iaR6JaR03a"],
    tags: [{ name: "punk" }, { name: "ska" }],
  },
  {
    name: "Sophia",
    user: "5",
    rider: "yes",
    artistImage: [
      "https://images.unsplash.com/photo-1598517834429-cf49a9e6077d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJhbmRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60",
      "https://media.istockphoto.com/photos/walking-through-the-doorway-into-darkness-picture-id1338220788?b=1&k=20&m=1338220788&s=170667a&w=0&h=klOjtrquUdXFLuFs1UUhSaAYyx1q4hWw9Ixowe_TGJY=",
    ],
    demoSong: [""],
    tags: [{ name: "reggae" }, { name: "ska" }],
  },
  {
    name: "Alex",
    user: "6",
    rider: "no",
    artistImage: [
      "https://images.unsplash.com/photo-1520170975578-25bd5217bf3d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGJhbmRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60",
      "https://images.unsplash.com/photo-1504466334719-af4ae9f12ad0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bW9vZHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    ],
    demoSong: ["spotify:track:0MWiSBKm8Avs8iDIxcertp"],
    tags: [{ name: "low-fi" }, { name: "relax" }],
  },
  {
    name: "Bob",
    user: "7",
    rider: "no",
    artistImage: [
      "https://images.unsplash.com/photo-1607957168249-1873bb5277f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGJhbmRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60",
      "https://images.unsplash.com/photo-1611191795623-73c95527cfbf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Ymx1ZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    ],
    demoSong: [""],
    tags: [{ name: "grunge" }, { name: "nineties" }],
  },
  {
    name: "John",
    user: "8",
    rider: "yes",
    artistImage: [
      "https://images.unsplash.com/photo-1550635707-e8c55839e834?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGJhbmRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60",
      "https://images.unsplash.com/photo-1589688173612-9c4453cd55f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGJsdWVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    ],
    demoSong: ["spotify:track:1u8c2t2Cy7UBoG4ArRcF5g"],
    tags: [{ name: "funk" }, { name: "soul" }],
  },
  {
    name: "Lola",
    user: "9",
    rider: "no",
    artistImage: [
      "https://images.unsplash.com/photo-1512404871764-1cf03a297841?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGJhbmRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60",
      "https://images.unsplash.com/photo-1503919275948-1f118d8ecf0b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8c291bHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    ],
    demoSong: ["spotify:track:0z8hI3OPS8ADPWtoCjjLl6"],
    tags: [{ name: "soul" }, { name: "romance" }],
  },
  {
    name: "Jackson",
    user: "10",
    rider: "yes",
    artistImage: [
      "https://media.istockphoto.com/photos/rock-band-silhouette-picture-id144220369?b=1&k=20&m=144220369&s=170667a&w=0&h=zltv8TtjArhuXhNAVUSpi4c2NqnXc3hBqcJfUyBDNpA=",
      "https://images.unsplash.com/photo-1618859437290-dc3cda39ea58?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c291bHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    ],
    demoSong: ["spotify:track:3AVXwaOGCEL8cmBecfcsFJ"],
    tags: [{ name: "space" }, { name: "electro" }],
  },
];

const seedArtists = async () => {
  await Artist.insertMany(artists);

  console.log("[INFO]: Successfully seeded tags");
};

module.exports = { seedArtists };
