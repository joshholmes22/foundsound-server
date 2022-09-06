const { ApolloError } = require("apollo-server");

const { Ticket } = require("../models");

// delete ticket function
const deleteTicket = async (_, { id }) => {
  const ticket = await Ticket.deleteOne({ id });

  return ticket;
};

module.exports = deleteTicket;
