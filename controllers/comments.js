const mongoose = require("mongoose");
const blogComments = mongoose.model("BlogComments");

exports.addComment = async (req, res) => {
  const comment = await blogComments.find({ slug: req.params.slug });
  const commentdata = req.body;
  // console.log(commentdata);

  if (!comment.length) {
    const NewComment = {
      slug: req.params.id,
      comments: {
        text: commentdata.comment,
        name: commentdata.data.name,
        avatar: commentdata.data.picture,
      },
    };
    const bcomment = new blogComments(NewComment);
    try {
      const newBlogComment = await bcomment.save();
      // console.log(JSON.stringify(newBlogComment));
      return res.json(newBlogComment);
    } catch (error) {
      return res.status(422).send(error.message);
    }
  } else {
    try {
      const NewComment = {
        text: commentdata.comment,
        name: commentdata.data.name,
        avatar: commentdata.data.picture,
      };
      const bcomment = await blogComments.findById(comment[0]._id);
      // console.log(bcomment);
      bcomment.comments.unshift(NewComment);

      await bcomment.save();
      res.json(bcomment);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
};

exports.getComments = async (req, res) => {
  try {
    const comments = await blogComments.find({ slug: req.params.slug });
    return res.json(comments);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};
