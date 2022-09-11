const { Schema } = require("mongoose");

const advertSchema = {
  event: {
    type: Schema.Types.ObjectId,
    ref: "event",
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
