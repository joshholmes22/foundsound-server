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
  rider: {
    type: String,
    required: false,
    default: null,
  },
  artistImage: [
    {
      type: String,
      default: null,
    },
  ],

  artistImageName: {
    type: String,
    default: null,
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
};
const options = {
  toJSON: {
    virtuals: true,
    getters: true,
  },
  id: true,
};

const schema = new Schema(artistSchema, options);

const Artist = model("Artist", schema);

module.exports = Artist;
