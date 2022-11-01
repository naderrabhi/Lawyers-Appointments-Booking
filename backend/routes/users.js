const express = require("express");
const router = express.Router();
const {updateUser,deleteUser,getUser} = require("../controllers/users")
const isAuth = require('../middlewares/isAuth');

//http://localhost:5000/api/v1/users
router.put('/',isAuth(),updateUser)

//http://localhost:5000/api/v1/users
router.get('/',isAuth(),getUser)

//http://localhost:5000/api/v1/users
router.delete('/',isAuth(),deleteUser)

module.exports = router;
