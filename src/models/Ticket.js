const { Schema } = require("mongoose");

const schema = {
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

module.exports = Ticket;
