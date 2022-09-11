const { Schema, model } = require("mongoose");

const artistSchema = {
  name: {
    type: String,
    trim: true,
    default: null,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  rider: {
    type: String,
    required: false,
    default: null,
  },
  artistImage: {
    type: String,
    default: [],
  },

  artistImageName: [
    {
      type: String,
      default: null,
    },
  ],
  demoSong: [
    {
      type: String,
      required: false,
    },
  ],
  tags: [
    {
      name: { type: String },
    },
  ],
};

const schema = new Schema(artistSchema);

const Artist = model("Artist", schema);

module.exports = Artist;
