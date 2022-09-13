const { Event } = require("../models");

const advertResponses = async (_, { advertResponsesInput }) => {
  try {
    const { adId, allResponses, eventId } = advertResponsesInput;

    console.log(allResponses);
    const ads = await Event.findOneAndUpdate(
      {
        _id: eventId,
      },
      {
        $push: {
          "adverts.$[a].allResponses": {
            $each: allResponses,
          },
        },
      },
      {
        arrayFilters: [
          {
            "a._id": adId,
          },
        ],
      }
    ).populate("eventOwner");
    console.log(ads);
    return ads;
  } catch (error) {
    console.log(`[ERROR]: Failed to update advert | ${error.message}`);
    throw new ApolloError("Failed to update advert");
  }
};
module.exports = advertResponses;
