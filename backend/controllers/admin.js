const User = require("../models/users");

const getAllUsers = async (req, res) => {
  const role = req.query.role;
  const name = req.query.name;
  try {
    if (role == "all") {
      const users = await User.find({ firstName: { $regex: name } });
      if (!users) return res.status(400).send({ msg: "No Users found" });
      return res.send(users);
    }
    const users = await User.find({ role: role, firstName: { $regex: name } });
    res.send(users);
  } catch (error) {
    res.status(500).send(error);
    console.log(error);
  }
};

const getOneUsers = async (req, res) => {
  const id = req.params.id;
  try {
    const client = await User.findById(id);
    if (!client) return res.status(400).send({ msg: "Not found" });
    if (client) return res.send(client);
  } catch (error) {
    res.status(400).send(error);
    console.log(error);
  }
};

const deleteUsers = async (req, res) => {
  const id = req.params.id;
  try {
    const existUser = await User.findOne({ _id: id });

    if (!existUser) return res.status(400).send({ msg: "Not found" });

    const deletedClient = await User.deleteOne({ _id: id });
    if (deletedClient.deletedCount) {
      return res.send({ msg: "User deleted successfully" });
    } else {
      return res.status(400).send({ msg: "User already deleted" });
    }
  } catch (error) {
    res.status(400).send({ msg: error.message });
    console.log(error);
  }
};

module.exports = { getAllUsers, deleteUsers, getOneUsers };
