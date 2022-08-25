const { Schema, model } = require("mongoose");

const audienceMemberSchema = {
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

const schema = new Schema(audienceMemberSchema);

const AudienceMember = model("AudienceMember", schema);

module.exports = AudienceMember;
