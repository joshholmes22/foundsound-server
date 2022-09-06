const { ApolloError } = require("apollo-server");

const { Ticket } = require("../models");

// create ticket function
const createTicket = async (_, { input }) => {
  const ticket = await Ticket.create(input);

  return { success: true, ticket };
};

module.exports = createTicket;
