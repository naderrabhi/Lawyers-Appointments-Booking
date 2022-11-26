const Post = require('../models/post')

const createPost = async (req, res) => {
  try {
    const newPost = await new Post({
        lawyerID: req.body.lawyerID,
        userID : req.body.userID,
        name : req.user.firstName + ' ' + req.user.lastName,
        comment : req.body.comment
    })
    await newPost.save()
    console.log(newPost);
    res.send({msg : "Post saved successfully",newPost})
  } catch (error) {
    res.status(400).send({ msg: error.message });
    console.log(error);
  }
};

const getPost = async (req, res) => {
  try {
    const posts = await Post.find({lawyerID : req.query.lawyerID})
    res.send(posts);
  } catch (error) {
    res.status(400).send({ msg: error.message });
    console.log(error);
  }
}

module.exports = { createPost,getPost };
