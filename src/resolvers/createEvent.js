const { Venue, Tag, Event } = require("../models");
const mockEvent = {
  name: "battleBands",
  description: "Battle of bands",
  startDateTime: "ddYLLLYYY",
  endDateTime: "ddLLLYYYY",
  venue: VenueId,
  imageUrl:
    "https://images.unsplash.com/photo-1514088939728-eced9016166a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmFuZHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  tags: TagsId,
  price: 12,
};

const createEvent = async (_, { input }) => {
  try {
    const event = input.eventId;
    const venue = input.venueId;
    const tag = input.tagId;

    const newVenue = await Venue.find({});
    const newTag = await Tag.find({});
    //check if venue and tag are found.
    if (newVenue && newTag) {
      const newEvent = await mockEvent.create({ input });
    }

    return { success: true };
  } catch (error) {
    console.log(`[ERROR]: Failed to create event.`);
  }
};
module.exports = createEvent;
