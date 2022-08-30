const { ApolloError } = require("apollo-server");

const { User } = require("../models");
const { signToken, verifyToken } = require("../utils/auth");

const login = async (_, { loginInput }) => {
  try {
    console.log(loginInput);
    const user = await User.findOne({ email: loginInput.email });

    if (!user) {
      console.log(
        `[ERROR]: Failed to login | ${loginInput.email} does not exist`
      );

      throw new ApolloError("Failed to login");
    }

    const isPasswordValid = await user.hashPassword(loginInput.password);
    console.log(isPasswordValid);

    if (!isPasswordValid) {
      console.log(
        `[ERROR]: Failed to login | ${loginInput.email} has incorrect password`
      );

      throw new ApolloError("Failed to login");
    }
    const loggedInUser = {
      id: user.get("_id"),
      firstName: user.get("firstName"),
      lastName: user.get("lastName"),
      email: user.get("email"),
      socialMedia: user.get("socialMedia"),
      imageUrl: user.get("imageUrl"),
      userType: user.get("userType"),
    };

    return {
      success: true,
      token: signToken(loggedInUser),
      user: loggedInUser,
    };
  } catch (error) {
    console.log(`[ERROR]: Failed to login | ${error.message}`);

    throw new ApolloError("Failed to login");
  }
};

module.exports = login;
