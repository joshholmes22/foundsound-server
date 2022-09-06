const { AuthenticationError, ApolloError } = require("apollo-server");
const { Tag } = require("../models");

const createTag = async (_, { input }) => {
  try {
    console.log(input);
    if (!input) {
      throw new AuthenticationError("All required fields are not provided!");
    }

    const { name } = input;

    const ifExists = await Tag.findOne({ name: name });

    if (ifExists) {
      console.log("tag already exists in DB");
      throw new ApolloError("tag already exists");
    } else {
      const tag = await Tag.create({ name });

      return { success: true, tag };
    }
  } catch (error) {
    console.log(`[ERROR]: Failed to create tag | ${error.message}`);

    throw new ApolloError("Failed to create tag");
  }
};

module.exports = createTag;
