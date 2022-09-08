const { ApolloError } = require("apollo-server");

const { User, AddressLookup, EventOrganiser, Artist, AudienceMember } = require("../models");

const signup = async (_, { signupInput }) => {
  try {
    const user = await User.findOne({ email: signupInput.email });

    if (user) {
      console.log(`[ERROR]: Failed to signup | ${signupInput.email} already exists`);

      throw new ApolloError("Failed to signup");
    }

    if (signupInput.userType === "eventOrganiser") {
      const createUser = await User.create({
        ...signupInput,
      });
      const { _id } = createUser;
      await EventOrganiser.create({ user: _id });
      return { success: true };
    } else if (signupInput.userType === "audienceMember") {
      const createUser = await User.create({
        ...signupInput,
      });
      const { _id } = createUser;
      await AudienceMember.create({ user: _id });
      return { success: true };
    } else if (signupInput.userType === "artist") {
      const createUser = await User.create({
        ...signupInput,
      });
      const { _id } = createUser;
      await Artist.create({ user: _id });
      return { success: true };
    }
  } catch (error) {
    console.log(`Failed to signup | ${error.message}`);
    throw new ApolloError("Failed to Signup");
  }
};

module.exports = signup;
