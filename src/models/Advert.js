const { Schema } = require("mongoose");

const advertSchema = {
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
