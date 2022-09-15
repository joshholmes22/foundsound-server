const { User } = require("../models");

const { faker } = require("@faker-js/faker");

const userTypes = ["eventOrganiser", "admin", "artist", "audienceMember"];

const users = new Array(20).fill("").map(() => {
  const userTypeIndex = Math.floor(Math.random() * userTypes.length);
  return {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
    password: "password123!",
    socialMedia: faker.internet.userName(),
    imageUrl: faker.image.avatar(),
    imageFileName: "default",
    userType: userTypes[userTypeIndex],
  };
});

users.push({
  firstName: "Ben",
  lastName: "Dover",
  email: "bendover@ymail.com",
  password: "password123!",
  socialMedia: "#BenDover",
  imageUrl:
    "https://images.unsplash.com/photo-1543373014-cfe4f4bc1cdf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2848&q=80",
  imageFileName: "default",
  userType: "artist",
});

const seedUsers = async () => {
  await User.insertMany(users);

  console.log("[INFO]: Successfully seeded users");
};

module.exports = { seedUsers };
