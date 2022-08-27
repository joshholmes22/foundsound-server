const { ApolloError } = require("apollo-server");
const { User, AddressLookup } = require("../models");

const signup = async (_, { signupInput }) => {
  const user = await User.findOne({ email: signupInput.email });

  if (user) {
    console.log(
      `[ERROR]: Failed to signup | ${signupInput.email} already exists`
    );

    throw new ApolloError("Failed to signup");
  }
  //   if (userType === "EventOrganiser") {
  //     const address = await AddressLookup.findOne({
  //       addresses: {
  //         $elemMatch: {
  //           _id: signupInput.address,
  //         },
  //       },
  //     });
  //   }

  //   const yourAddress = address
  //     .get("addresses")
  //     .find((address) => address.get("_id").toString() === signupInput.address);

  await User.create({
    ...signupInput,
    // address: yourAddress,
  });

  return { success: true };
};

module.exports = signup;
