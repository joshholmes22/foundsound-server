const { ApolloError, AuthenticationError } = require("apollo-server");
const { Event, User } = require("../models");

const deleteEvent = async (_, { input }, { user }) => {
  try {
    if (!user) {
      throw new AuthenticationError("User is not authorized");
    }

    const loggedUser = await User.findById(user.id);

    const getEvent = Event.findById({ _id: id });

    if (loggedUser && getEvent.eventOwner === user.id) {
      if (!input) {
        throw new AuthenticationError("You must be logged in to delete an event .");
      }

      const { id } = input;
      console.log(id);
      const deletedItem = await Event.findByIdAndDelete({ _id: id });

      return { success: true, deletedItem };
    } else {
      throw new ApolloError("Failed to authenticate user for delete process");
    }
  } catch (error) {
    console.log(`[ERROR]: Failed to delete event | ${error.message}`);
    throw new ApolloError("Failed to delete event");
  }
};

module.exports = deleteEvent;
