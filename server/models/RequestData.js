const mongoose = require("mongoose");

const RequestDataSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
  },
  address: {
    type: String,
  },
  wasteType: {
    type: String,
  },
  quantity: {
    type: Number,
  },
  description: {
    type: String,
  },

  pickupDate: {
    type: Date,
  },
  date: {
    type: Date,
  },
});
module.exports = mongoose.model("RequestData", RequestDataSchema);
