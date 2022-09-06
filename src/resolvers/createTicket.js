const { ApolloError } = require("apollo-server");

const { Ticket } = require("../models");

// create ticket function
const createTicket = async (_, { id }) => {
  const ticket = await Ticket.create({ id });

  return { success: true, ticket };
};

module.exports = createTicket;
