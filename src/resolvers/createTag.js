const { Tag } = require("../models");

const createTag = async (_, { input }) => {
  const newTag = new Tag(input);

  await newTag.save();

  return newTag;
};

module.exports = createTag;
