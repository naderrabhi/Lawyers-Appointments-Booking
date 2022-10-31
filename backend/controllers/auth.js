const User = require("../models/users");
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");

const registerUserAsLawyer = async (req, res) => {
  const { email, password, role } = req.body;
  try {
    const existUser = await User.findOne({ email: email });

    if (existUser)
      return res.status(400).send({ msg: "Lawyer already exists" });
    if (role && role == "admin")
      return res.status(400).send({ msg: "you can not register as admin" });
    const newLawyer = await new User({ ...req.body,role : 'lawyer' });
    const hashedPassword = await bcrypt.hash(password, 10);
    newLawyer.password = hashedPassword;
    await newLawyer.save();
    res.send({ msg: "Lawyer registered successfully", newLawyer });
  } catch (error) {
    res.status(400).send({ msg: error.message });
    console.log(error);
  }
};

const registerUserAsClient = async (req, res) => {
  const { email, password, role } = req.body;
  try {
    const existUser = await User.findOne({ email: email });

    if (existUser)
      return res.status(400).send({ msg: "Client already exists" });
    if (role && role == "admin")
      return res.status(400).send({ msg: "you can not register as admin" });
    const newClient = await new User({ ...req.body });
    const hashedPassword = await bcrypt.hash(password, 10);
    newClient.password = hashedPassword;
    await newClient.save();
    res.send({ msg: "Client registered successfully", newClient });
  } catch (error) {
    res.status(400).send({ msg: error.message });
    console.log(error);
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const existUser = await User.findOne({ email: email });
    
    if (!existUser)
      return res
        .status(400)
        .send({ msg: "user does not exist, please sign up" });

      const isMatched = await bcrypt.compare(password, existUser.password);
      if (!isMatched) {
        return res.status(400).send({ msg: "bad credentials" });
      }
      const payload = { id: existUser._id };
      const token = await jwt.sign(payload, process.env.privateKey);
      return res.send({ user: existUser, token });

  } catch (error) {
    res.status(400).send({ msg: error.message });
    console.log(error);
  }
};

const currentUser = async (req, res) => {
  res.send(req.user);
};

module.exports = {
  registerUserAsLawyer,
  currentUser,
  loginUser,
  registerUserAsClient,
};
