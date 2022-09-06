const { ApolloError } = require("apollo-server");

const { Ticket } = require("../models");

const updateTicket = async (_, { input, id }) => {
  const ticket = await Ticket.findOneAndUpdate(
    { "ticket._id": id },
    { new: true }
  );

  return { success: true, ticket };
};

module.exports = updateTicket;
