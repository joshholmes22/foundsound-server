const { ApolloError } = require("apollo-server");

const { Ticket } = require("../models");

const updateTicket = async (_, { input }) => {
  const ticket = await Ticket.findOneAndUpdate(
    { "ticket._id": input.id },
    { $set: { "ticket.$.confirmed": input.confirmed } },
    { new: true }
  );

  return ticket;
};

module.exports = updateTicket;
