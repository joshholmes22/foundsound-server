const { Schema } = require("mongoose");

const advertSchema = {
  event: {
    type: Schema.Types.ObjectId,
    ref: "event",
  },
  isPaid: {
    type: Boolean,
    required: true,
  },
  expires: {
    type: Date,
    required: true,
    trim: true,
  },
  artist,
};

const options = {
  toJSON: {
    virtuals: true,
    getters: true,
  },
  id: false,
};

const schema = new Schema(advertSchema, options);

module.exports = schema;
