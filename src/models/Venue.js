const { Schema, model } = require("mongoose");

const venueSchema = {
  address: {
    type: string,
    required: true,
  },
  capacity: {
    type: string,
    required: true,
  },
  facilities: {
    type: String,
    enum: ["hasFood", "isAcessibile", "hasCurfew", h"asAlcoholLicense", "hasDressingRooms", "hasSmokingArea", "hasSeating", "isDogFriendly", "hasCloakRoom", "hasShoweringFacilities", "hasToilets", "hygeineRating"],
  },
};

const schema = new Schema(venueSchema);
const Venue = model("Venue", Schema);
module.exports = Venue;