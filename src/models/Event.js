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
  startDateTime: {
    type: Date,
    required: true,
    trim: true,
  },
  endDateTime: {
    type: Date,
    required: true,
    trim: true,
  },
  venue: {
    type: Schema.Types.ObjectId,
    ref: "Venue",
  },
  imageUrl: {
    type: String,
    trim: true,
  },
  tags: [
    {
      type: Schema.Types.ObjectId,
<<<<<<< HEAD
      ref: "Tag",
    },
  ],
=======
      ref: "Tags",
    },
  ],

  price: {
    type: Number,
  },
>>>>>>> b7a56649ac6d0633cece488ddc80d5193c9a1394
};

const schema = new Schema(eventSchema);

const Event = model("Event", schema);

module.exports = Event;
