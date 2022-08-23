const { Schema, model } = require("mongoose");

const Address = require("./Address");

const venueSchema = {
  address: {
    type: Address,
    required: true,
  },
  capacity: {
    type: String,
    required: true,
  },
  facilities: {
    type: String,
    enum: [
      "hasFood",
      "isAcessibile",
      "hasCurfew",
      "asAlcoholLicense",
      "hasDressingRooms",
      "hasSmokingArea",
      "hasSeating",
      "isDogFriendly",
      "hasCloakRoom",
      "hasShoweringFacilities",
      "hasToilets",
      "hygeineRating",
    ],
  },
};

const schema = new Schema(venueSchema);
const Venue = model("Venue", schema);
module.exports = Venue;
