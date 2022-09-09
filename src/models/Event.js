const { Schema, model } = require("mongoose");

const Address = require("./Address");

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
  address: {
    type: Address,
  },
  postcode: {
    type: String,
    required: true,
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
  startTime: {
    type: String,
    required: true,
    trim: true,
  },
  endTime: {
    type: String,
    required: true,
    trim: true,
  },
  facilities: [
    {
      type: String,
      enum: [
        "none",
        "hasFood",
        "isAcessibile",
        "hasCurfew",
        "asAlcoholLicense",
        "hasDressingRooms",
        "hasSmokingArea",
        "hasSeating",
        "isDogFriendly",
        "hasCloakRoom",
        "hasShoweringFacilities",
        "hasToilets",
        "hygeineRating",
      ],
      default: "none",
    },
  ],
  capacity: {
    type: Number,
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

const options = {
  toJSON: {
    virtuals: true,
    getters: true,
  },
  id: true,
};

const schema = new Schema(eventSchema, options);

const Event = model("Event", schema);

module.exports = Event;
