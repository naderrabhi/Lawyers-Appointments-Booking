const express = require('express');
const { registerUserAsLawyer, registerUserAsClient, loginUser, currentUser } = require('../controllers/auth');
const isAuth = require('../middlewares/isAuth');
const router = express.Router();

//http://localhost:5000/api/v1/auth/lawyer/register
router.post('/lawyer/register',registerUserAsLawyer)

//http://localhost:5000/api/v1/auth/client/register
router.post('/client/register',registerUserAsClient)

//http://localhost:5000/api/v1/auth/login
router.post('/login',loginUser)

//http://localhost:5000/api/v1/auth/current
router.get('/current', isAuth(), currentUser)

module.exports = router