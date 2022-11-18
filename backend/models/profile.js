const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
  lawyerID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  image: {
    type: String,
  },
  address: {
    type: String,
  },
  bio: {
    type: String,
  },
  phone: {
    type: String,
  },
  specialty: {
    type: String,
  },
  name: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Profile = mongoose.model("profile", profileSchema);
