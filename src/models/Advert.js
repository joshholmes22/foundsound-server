const { Schema } = require("mongoose");
const User = require("./User");

const advertSchema = {
  event: {
    type: Schema.Types.ObjectId,
    ref: "Event",
  },
  description: {
    type: String,
    require: true,
  },
  setTime: {
    type: String,
    require: true,
  },
  solo: {
    type: Boolean,
  },
  fee: {
    type: String,
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
  allResponses: [
    {
      type: Schema.Types.ObjectId,
      ref: "Artist",
    },
  ],
  status: {
    type: String,
    enum: ["pending", "completed"],
  },
};

const options = {
  toJSON: {
    virtuals: true,
    getters: true,
  },
  id: true,
};

const schema = new Schema(advertSchema, options);

module.exports = schema;
