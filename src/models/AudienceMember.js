const { Schema, User } = require("mongoose");

const schema = {
  user: {
    type: String,
    required: true,
  },
  booking: [
    {
      type: String,
      required: true,
    },
  ],
  favouriteArtists: {
    type: String,
    required: true,
  },
  favouriteEvents: {
    type: String,
    required: true,
    unique: true,
  },
};

module.exports = AudienceMember;
