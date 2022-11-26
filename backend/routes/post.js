const express = require("express");
const { createPost,getPost } = require("../controllers/post");
const isAuth = require("../middlewares/isAuth");
const router = express.Router();

router.post("/",isAuth(),createPost)
router.get("/",isAuth(),getPost)

module.exports = router;