const { Schema } = require("mongoose");

const venueSchema = {
    address:{},
    
};

const schema = new Schema(venueSchema);
const Venue = model("Venue", Schema);
module.exports = Venue;
