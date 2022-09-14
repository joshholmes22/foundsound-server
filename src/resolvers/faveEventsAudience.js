const { ApolloError } = require("apollo-server");
const { Event } = require("../models");

const favoriteEvents = async (_, { eventId }) => {
  try {
    console.log(eventId);
    if (eventId) {
      const eventData = await Event.findById(eventId);
      const savedEvents = eventData.savedEvents || [];

      const alreadySavedEvents = savedEvents.includes(eventId);

      if (!alreadySavedEvents) {
        const event = await Event.findByIdAndUpdate(eventId, {
          {$push: {savedEvents: eventId}},{new:true}.populate("savedEvents");
        

        return event;
      }
      } else {
        throw new ApolloError("Event already saved");
      }
    }
  } catch (error) {
    console.log(`[ERROR]: Failed to save event | ${error.message}`);
    throw new ApolloError("Failed to save event");
  }
};

module.exports = favoriteEvents;
