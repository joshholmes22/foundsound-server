const { ApolloError } = require("apollo-server");

const { Event } = require("../models");

const createEvent = async (_, { createEventInput }) => {
  try {
<<<<<<< HEAD
<<<<<<< HEAD
    if (!input) {
      throw new ApolloError("All required fields are not provided!");
    }

    if (input) {
      const event = await Event.create({
        ...eventInput,
      });

      return { event };
    }
  } catch (error) {
    console.log(`[ERROR]: Failed to create venue | ${error.message}`);

    throw new ApolloError("Failed to create venue");
=======
    console.log(eventInput);
    if (!eventInput) {
      throw new ApolloError("All required fields are not provided!");
    }
=======
    const newEvent = await Event.create(createEventInput);
>>>>>>> 9c4658893733b8e59c599c3d055dfeabb3b69356

    const event = await Event.findById(newEvent.get("_id"))
      .populate({
        path: "venue",
        populate: {
          path: "address",
          model: "Address",
        },
      })
      .populate("tags");

    return event;
  } catch (error) {
    console.log(`[ERROR]: Failed to create event | ${error.message}`);
    throw new ApolloError("Failed to create event");
>>>>>>> b7a56649ac6d0633cece488ddc80d5193c9a1394
  }
};

module.exports = createEvent;
