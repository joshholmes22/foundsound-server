const { Schema, model } = require("mongoose");

const artistSchema = {
  name: {
    type: String,
    trim: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
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
  rider: {
    type: String,
    required: false,
  },
  artistImage: {
    type: String,
  },

  artistImageName: {
    type: String,
  },
};

const schema = new Schema(artistSchema);

const Artist = model("Artist", schema);

module.exports = Artist;
