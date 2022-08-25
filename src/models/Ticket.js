const { Schema, model } = require("mongoose");

const ticketSchema = {
  hasPrice: {
    type: Boolean,
    required: true,
  },
  noOfTickets: {
    type: Number,
    required: true,
  },
  bandShare: {
    type: Number,
    required: false,
  },
  fixedRate: {
    type: Number,
    required: false,
  },
};

const schema = new Schema(ticketSchema);

const Ticket = model("Ticket", schema);

module.exports = Ticket;
