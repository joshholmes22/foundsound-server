const { ApolloError } = require("apollo-server");
const axios = require("axios");
const { AddressLookup, Address } = require("../models");
const addressLookup = async (_, { postcode }) => {
  const addressesFromDB = await AddressLookup.findOne({
    postcode: postcode.toUpperCase().replace(" ", ""),
  }).populate("addresses");
  console.log(addressesFromDB);

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
      // console.log(data);
      const addressDocs = data.addresses.map(
        async (address) => await Address.create(address)
      );
      const allAddresses = await Promise.all(addressDocs);
      // console.log(allAddresses);
      const addresses = allAddresses.map(({ _id }) => _id);
      const addressLookupDoc = {
        postcode,
        latitude: data.latitude,
        longitude: data.longitude,
        addresses,
      };
      console.log(addressLookupDoc);

      const addressCreate = await AddressLookup.create(addressLookupDoc);
      const docs = await AddressLookup.findById(addressCreate._id).populate(
        "addresses"
      );
      // console.log(JSON.stringify(addresses));
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
  console.log(JSON.stringify(addressesFromDB));
  return addressesFromDB;
};

module.exports = addressLookup;
