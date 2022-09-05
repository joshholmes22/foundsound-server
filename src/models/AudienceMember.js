const { Schema, model } = require("mongoose");

const audienceMemberSchema = {
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  booking: [
    {
      type: String,
    },
  ],
  favouriteArtists: {
    type: String,
  },
  favouriteEvents: {
    type: String,
    unique: true,
  },
};

const schema = new Schema(audienceMemberSchema);

const AudienceMember = model("AudienceMember", schema);

module.exports = AudienceMember;
