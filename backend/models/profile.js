const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
  lawyerID : {
    type : mongoose.Schema.Types.ObjectId,
    ref : 'user'
  },
  photo: {
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
  experience: [
    {
      company: {
        type: String,
        required: true,
      },
      from: {
        type: String,
        required: true,
      },
      to: {
        type: String,
      },
    },
  ],
  education: [
    {
      degree: {
        type: String,
        required: true,
      },
      from: {
        type: String,
        required: true,
      },
      to: {
        type: String,
      },
    },
  ],
  social: {
    twitter: {
      type: String,
    },
    facebook: {
      type: String,
    },
    linkedin: {
      type: String,
    },
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Profile = mongoose.model("profile", profileSchema);
