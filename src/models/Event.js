const { Schema, model } = require("mongoose");

const Address = require("./Address");
const Advert = require("./Advert");

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
        "Food",
        "Accessible",
        "Curfew",
        "Alcohol License",
        "Dressing Rooms",
        "Smoking Area",
        "Seating",
        "Dog Friendly",
        "Cloak Room",
        "Showering Facilities",
        "Toilets",
        "hygiene Rating",
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
      name: { type: String },
    },
  ],
  adverts: [
    {
      type: Advert,
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
