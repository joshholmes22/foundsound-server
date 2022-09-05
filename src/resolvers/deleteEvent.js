const { ApolloError, AuthenticationError } = require("apollo-server");
const { Venue, AddressLookup, User, EventOrganiser } = require("../models");

const deleteEvent = async (_, { input }, { user }) => {
  try {
    if (!user && !input) {
      throw new AuthenticationError(
        "You must be logged in to delete an event ."
      );
    }
    const deletedItem = await Item.findByIdAndDelete(EventId);

    return deletedItem;
  } catch (error) {
    console.log(`[ERROR]: Failed to delete event | ${error.message}`);
    throw new ApolloError("Failed to delete event");
  }
};

module.exports = deleteEvent;
