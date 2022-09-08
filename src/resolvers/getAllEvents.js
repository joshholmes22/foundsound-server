const { ApolloError, AuthenticationError } = require("apollo-server");
const Event = require("../models/Event");

const getAllEvents = async (_, { input }) => {
  try {
    const allEvents = await Event.find({});
    if (allEvents) {
      //return { success: true, allEvents };
      // let abc = [
      //   {
      //     id: "123123",
      //     name: "abc",
      //     description: "abc",
      //     startDate: "abc",
      //     endDate: "abc",
      //     time: "abc",
      //     venue: { address: {} },
      //     imageUrl: "abc",
      //     postcode: "abc",
      //     tags: ["abcd"],
      //     price: 2.15,
      //   },
      // ];
      if (allEvents.length === 0) {
        return null;
      }
      return allEvents;
    } else {
      throw new ApolloError("No events");
    }
  } catch (error) {
    console.log(`[ERROR]: Failed to find events | ${error.message}`);

    throw new ApolloError("Failed to find events");
  }
};

module.exports = getAllEvents;
