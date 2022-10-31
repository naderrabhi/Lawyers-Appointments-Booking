const express = require("express");
const isAdmin = require("../middlewares/isAdmin");
const isAuth = require("../middlewares/isAuth");
const router = express.Router();

const { getAllUsers,deleteUsers,getOneUsers} = require("../controllers/admin");

//http://localhost:5000/api/v1/admin/?role=all&name=law
router.get("/", isAuth(), isAdmin, getAllUsers);

//http://localhost:5000/api/v1/admin/63603aa5d5b653144bec0d85
router.delete("/:id", isAuth(), isAdmin, deleteUsers);

//http://localhost:5000/api/v1/admin/63603aa5d5b653144bec0d85
router.get("/:id", isAuth(), isAdmin, getOneUsers);

module.exports = router;
