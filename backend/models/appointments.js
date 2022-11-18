const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
  clientID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  lawyerID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  subject: {
    type: String,
  },
  description: {
    type: String,
  },
  day: {
    type: String,
    required: true,
  },
  hour: {
    type: String,
    required: true,
  },
});

module.exports = Appointment = mongoose.model("appointment", appointmentSchema);
