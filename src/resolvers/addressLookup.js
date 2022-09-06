const axios = require("axios");
const { ApolloError } = require("apollo-server");

const { AddressLookup, Address } = require("../models");

const addressLookup = async (_, { postcode }) => {
  const addressesFromDB = await AddressLookup.findOne({
    postcode: postcode.toUpperCase().replace(" ", ""),
  }).populate("addresses");

  if (!addressesFromDB) {
    console.log(
      `[INFO]: Retrieving addresses from API | Postcode: ${postcode
        .toUpperCase()
        .replace(" ", "")}`
    );

    const url = `https://api.getaddress.io/find/${postcode
      .toUpperCase()
      .replace(" ", "")}`;

    const { data } = await axios.get(url, {
      params: {
        "api-key": process.env.GET_ADDRESS_API_KEY,
        expand: true,
      },
    });

    if (data.addresses.length > 0) {
      const addressDocs = data.addresses.map(
        async (address) => await Address.create(address)
      );

      const allAddresses = await Promise.all(addressDocs);

      const addresses = allAddresses.map(({ _id }) => _id);

      const addressLookupDoc = {
        postcode,
        latitude: data.latitude,
        longitude: data.longitude,
        addresses,
      };

      const addressCreate = await AddressLookup.create(addressLookupDoc);
      const docs = await AddressLookup.findById(addressCreate._id).populate(
        "addresses"
      );

      return docs;
    } else {
      throw new ApolloError("Invalid address");
    }
  }

  console.log(
    `[INFO]: Retrieving addresses from cache | Postcode: ${postcode
      .toUpperCase()
      .replace(" ", "")}`
  );

  return addressesFromDB;
};

module.exports = addressLookup;
