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
  demoSong: {
    type: String,
    required: false,
  },
  tag: {
    type: Schema.Types.ObjectId,
    ref: "Tag",
  },
  rider: {
    type: String,
    required: false,
  },
};

const schema = new Schema(artistSchema);

const Artist = model("Artist", schema);

module.exports = Artist;
