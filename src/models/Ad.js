const { Schema } = require("mongoose");
// see which model to bring in

const adSchema = {
  event: {
    type: Schema.Types.ObjectId,
    ref: "Event",
  },
  isPaid: {
    type: string,
    required: true,
    type: Boolean,
  },
  expires: {
    type: Date,
    required: true,
    trim: true,
  },
};
const schema = new Schema(adSchema);
const Ad = model("Ad", schema);
module.exports = Ad;
