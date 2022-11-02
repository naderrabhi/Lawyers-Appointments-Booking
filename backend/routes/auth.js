const express = require("express");
const {
  registerUserAsLawyer,
  registerUserAsClient,
  loginUser,
  currentUser,
} = require("../controllers/auth");
const isAuth = require("../middlewares/isAuth");
const {
  loginRules,
  registerAsClientRules,
  registerAsLawyerRules,
  validator,
} = require("../middlewares/validator");
const router = express.Router();

//http://localhost:5000/api/v1/auth/lawyer/register
router.post(
  "/lawyer/register",
  registerAsLawyerRules(),
  validator,
  registerUserAsLawyer
);

//http://localhost:5000/api/v1/auth/client/register
router.post(
  "/client/register",
  registerAsClientRules(),
  validator,
  registerUserAsClient
);

//http://localhost:5000/api/v1/auth/login
router.post("/login", loginRules(), validator, loginUser);

//http://localhost:5000/api/v1/auth/current
router.get("/current", isAuth(), currentUser);

module.exports = router;
