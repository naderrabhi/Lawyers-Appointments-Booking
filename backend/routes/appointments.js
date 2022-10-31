const express = require("express");
const router = express.Router();
const {getAllAppointmentForLawyer,getAllAppointmentForLClient,createAppointment,getOneAppointment,deleteAppointment} = require("../controllers/appointments");
const isAuth = require("../middlewares/isAuth");


router.post("/:id", isAuth(), createAppointment);
router.get("/:id", isAuth(), getAllAppointmentForLawyer);
router.get("/:id", isAuth(), getAllAppointmentForLClient);
router.get("/:id", isAuth(),getOneAppointment);
router.delete("/:id", isAuth(), deleteAppointment);

module.exports = router;
