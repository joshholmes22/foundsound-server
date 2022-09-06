const { ApolloError } = require("apollo-server");
const { Tag } = require("../models");

const tags = async (_, { name }) => {
  try {
    const tags = await Tag.find({});
    return tags;
  } catch (error) {
    throw new ApolloError("Cannot get tags");
  }
};

module.exports = tags;
