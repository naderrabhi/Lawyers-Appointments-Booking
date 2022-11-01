const express = require("express");
const router = express.Router();
const {getAllAppointmentOfOneLawyer,getAllAppointment,createAppointment,getOneAppointment,deleteAppointment} = require("../controllers/appointments");
const isAuth = require("../middlewares/isAuth");

//http://localhost:5000/api/v1/booking/63603a47d5b653144bec0d73
router.get('/:id',isAuth(),getAllAppointmentOfOneLawyer)

//http://localhost:5000/api/v1/booking/63603a47d5b653144bec0d73
router.post("/:id", isAuth(), createAppointment);


//http://localhost:5000/api/v1/booking
router.get("/", isAuth(), getAllAppointment);

//http://localhost:5000/api/v1/booking/63604e2bc4148b0bffd149c3
router.get("/:id", isAuth(),getOneAppointment);

//http://localhost:5000/api/v1/booking/63604e2bc4148b0bffd149c3
router.delete("/:id", isAuth(), deleteAppointment);

module.exports = router;
