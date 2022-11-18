const User = require("../models/users");

const updateUser = async (req, res) => {
  const { email, role } = req.body;
  try {
    if (role && role == "admin")
      return res
        .status(400)
        .send({ msg: "you can not change your role as admin" });
    const checkEmail = await User.findOne({ email: email });
    if (checkEmail)
      return res.status(400).send({ msg: "try another email address" });
    const updatedUser = await User.updateOne(
      { _id: req.user._id },
      { ...req.body }
    );
    if (updatedUser.modifiedCount) {
      const userAfterUpdate = await User.findOne({ _id: req.user._id });
      return res.send({ msg: "user updated successfully", userAfterUpdate });
    } else {
      return res.status(400).send({ msg: "user already updated" });
    }
  } catch (error) {
    res.status(400).send(error);
    console.log(error);
  }
};

const getUser = async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.user._id });
    res.send(user);
  } catch (error) {
    res.status(400).send(error);
    console.log(error);
  }
};

const deleteUser = async (req, res) => {
  try {
    await User.deleteOne({ _id: req.user._id });
    res.send({ msg: "deleted successfully" });
  } catch (error) {
    res.status(400).send(error);
    console.log(error);
  }
};

module.exports = { updateUser, deleteUser, getUser };
