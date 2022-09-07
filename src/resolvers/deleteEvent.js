const { ApolloError, AuthenticationError } = require("apollo-server");
const { Event } = require("../models");

const deleteEvent = async (_, { input }) => {
  try {
    if (!input) {
      throw new AuthenticationError(
        "You must be logged in to delete an event ."
      );
    }

    const { id } = input;
    console.log(id);
    const deletedItem = await Event.findByIdAndDelete({ _id: id });

    return { success: true, deletedItem };
  } catch (error) {
    console.log(`[ERROR]: Failed to delete event | ${error.message}`);
    throw new ApolloError("Failed to delete event");
  }
};

module.exports = deleteEvent;
