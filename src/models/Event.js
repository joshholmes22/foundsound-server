const { Schema, model } = require("mongoose");

const eventSchema = {
  name: {
    type: String,
    required: true,
    minLength: 1,
    maxLength: 150,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    minLength: 10,
    trim: true,
  },
  startDate: {
    type: Date,
    required: true,
    trim: true,
  },
  endDate: {
    type: Date,
    required: true,
    trim: true,
  },
  time: {
    type: String,
    required: true,
    trim: true,
  },
  venue: {
    type: Schema.Types.ObjectId,
    ref: "Venue",
    required: true,
  },
  postcode: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    trim: true,
  },
  tags: [
    {
      type: Schema.Types.ObjectId,
      ref: "Tag",
    },
  ],
};

const schema = new Schema(eventSchema);

const Event = model("Event", schema);

module.exports = Event;
