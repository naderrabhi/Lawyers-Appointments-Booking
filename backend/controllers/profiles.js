const Profile = require("../models/profile");

const createProfile = async (req, res) => {
  const url = `${req.protocol}://${req.get("host")}`;
  Object.keys(req.body).forEach((key) => {
    if (req.body[key] === "") {
      delete req.body[key];
    }
  });
  try {
    const existProfile = await Profile.findOne({ lawyerID: req.user._id });

    if (existProfile) {
      await Profile.updateOne({ lawyerID: req.user._id }, { ...req.body });
      const updatedProfile = await Profile.find({ lawyerID: req.user._id });
      return res.send({ updatedProfile });
    }
    const newProfile = await new Profile({
      ...req.body,
      lawyerID: req.user._id,
    });
    if (url) {
      newProfile.image = `${url}/${req.file.path}`;
    }
    newProfile.specialty = req.user.specialty;
    newProfile.name = req.user.firstName + " " + req.user.lastName;
    await newProfile.save();
    res.send(newProfile);
  } catch (error) {
    res.status(400).send({ msg: error.message });
    console.log(error);
  }
};

const getMyProfile = async (req, res) => {
  try {
    const profile = await Profile.findOne({
      lawyerID: { _id: req.user._id },
    }).populate("lawyerID", "-password");
    if (!profile)
      return res.status(400).send({ msg: "you can not access this profile" });
    res.send(profile);
  } catch (error) {
    res.status(400).send({ msg: error.message });
    console.log(error);
  }
};

const getAllProfiles = async (req, res) => {
  const specialty = req.query.specialty;
  const name = req.query.name;
  try {
    if (specialty == "all" && !name) {
      const profiles = await Profile.find({}).populate("lawyerID", "-password");
      return res.send(profiles);
    }
    if (specialty == "all" && name) {
      const profiles = await Profile.find({ name: { $regex: name } }).populate(
        "lawyerID",
        "-password"
      );
      return res.send(profiles);
    }
    if (specialty !== "all") {
      const profiles = await Profile.find({ specialty: specialty }).populate(
        "lawyerID",
        "-password"
      );
      console.log("hi");
      return res.send(profiles);
    }
  } catch (error) {
    res.status(400).send({ msg: error.message });
    console.log(error);
  }
};

const getOneProfile = async (req, res) => {
  try {
    const profile = await Profile.find({ _id: req.params.id }).populate(
      "lawyerID",
      "-password"
    );
    res.send(profile);
  } catch (error) {
    res.status(400).send({ msg: error.message });
    console.log(error);
  }
};

const deleteProfile = async (req, res) => {
  const id = req.params.id;
  try {
    const deletedProfile = await Profile.deleteOne({ lawyerID: id });
    if (deletedProfile.deletedCount) {
      return res.send({ msg: "Profile deleted successfully" });
    } else {
      return res.status(400).send({ msg: "Profile already deleted" });
    }
  } catch (error) {
    res.status(400).send({ msg: error.message });
    console.log(error);
  }
};

module.exports = {
  getMyProfile,
  createProfile,
  getAllProfiles,
  getOneProfile,
  deleteProfile,
};
