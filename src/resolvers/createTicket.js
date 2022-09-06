const { ApolloError } = require("apollo-server");

const { Ticket } = require("../models");

// create ticket function
const createTicket = async (_, { input }) => {
  const ticket = await Ticket.create({ input });

  return ticket;
};

module.exports = createTicket;
