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

router.post(
  "/lawyer/register",
  registerAsLawyerRules(),
  validator,
  registerUserAsLawyer
);
router.post(
  "/client/register",
  registerAsClientRules(),
  validator,
  registerUserAsClient
);
router.post("/login", loginRules(), validator, loginUser);
router.get("/current", isAuth(), currentUser);

module.exports = router;
