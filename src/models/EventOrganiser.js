const { Schema, model } = require("mongoose");

const EventOrganiserSchema = {
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  verificationCode: {
    type: String,
    enum: ["pending", "rejected", "completed"],
    trim: true,
  },
};

const schema = new Schema(EventOrganiserSchema, {
  id: true,
  timestamps: true,
});

const EventOrganiser = model("EventOrganiser", schema);

module.exports = EventOrganiser;
