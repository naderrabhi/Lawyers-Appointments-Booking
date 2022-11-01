const express = require('express');
const router = express.Router();
const isAuth = require('../middlewares/isAuth')
const {createProfile,getAllProfiles,getMyProfile,getOneProfile} = require('../controllers/profiles')

//http://localhost:5000/api/v1/profiles/my_profile
router.get('/my_profile',isAuth(),getMyProfile)

//http://localhost:5000/api/v1/profiles
router.put('/',isAuth(),createProfile)

//http://localhost:5000/api/v1/profiles
router.get('/',isAuth(),getAllProfiles)

//http://localhost:5000/api/v1/profiles/636041e6e844d99654057f3d
router.get('/:id',isAuth(),getOneProfile)


module.exports = router