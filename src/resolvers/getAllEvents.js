const { ApolloError, AuthenticationError } = require("apollo-server");
const { Event } = require("../models/Event");

const getAllEvents = async (_, { input }) => {
   try {
    if(!events){ 
        throw new ApolloError("All required fields are provided");
    }
    if (events){
        const allEvents = await Event.findAll({});
        return {success: true, allEvents};

    } else {
        throw new AuthenticationError("Unauthorized access");
    } catch (error) {
        console.log(`[ERROR]: Failed to find events | ${error.message}`);
    
      throw new ApolloError("Failed to find events");
    }
}}

module.exports = getAllEvents;
