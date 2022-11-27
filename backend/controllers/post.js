const Post = require("../models/post");

const createPost = async (req, res) => {
  try {
    const newPost = await new Post({
      lawyerID: req.body.lawyerID,
      userID: req.body.userID,
      name: req.user.firstName + " " + req.user.lastName,
      comment: req.body.comment,
    });
    await newPost.save();
    res.send({ msg: "Post saved successfully", newPost });
  } catch (error) {
    res.status(400).send({ msg: error.message });
    console.log(error);
  }
};

const getPost = async (req, res) => {
  try {
    const posts = await Post.find({ lawyerID: req.query.lawyerID });
    res.send(posts);
  } catch (error) {
    res.status(400).send({ msg: error.message });
    console.log(error);
  }
};

const deletePost = async (req, res) => {
  const id = req.params.id;
  try {
    const deletedPost = await Post.deleteOne({ _id: id });
    if (deletedPost.deletedCount) {
      return res.send({ msg: "Post deleted successfully" });
    } else {
      return res.status(400).send({ msg: "Profile already deleted" });
    }
  } catch (error) {
    res.status(400).send({ msg: error.message });
    console.log(error);
  }
};

const editPost = async (req, res) => {
  try {
    const postEdited = await Post.updateOne(
      { _id: req.params.id },
      { ...req.body,comment : req.body.newPost }
    );
    const postAfterEdit = await Post.findById(req.params.id)
    res.send({ msg: "post updated successfully", postAfterEdit });
  } catch (error) {}
};
module.exports = { createPost, getPost, deletePost, editPost };
