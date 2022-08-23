const { Schema } = require("mongoose");

const tagSchema = {
  name: {
    type: String,
    required: true,
  },
};

const schema = new Schema(tagSchema);
const Tag = model("Tag", schema);
module.exports = Tag;
