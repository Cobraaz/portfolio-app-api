const mongoose = require("mongoose");
const blogComments = mongoose.model("BlogComments");

exports.addComment = async (req, res) => {
  const comment = await blogComments.find({ slug: req.params.slug });
  const commentdata = req.body;

  if (!comment.length) {
    const NewComment = {
      slug: req.params.slug,
      comments: {
        text: commentdata.comment,
        name: commentdata.data.name,
        avatar: commentdata.data.picture,
        authId: commentdata.data.sub,
      },
    };
    const bcomment = new blogComments(NewComment);
    try {
      const newBlogComment = await bcomment.save();
      return res.json(newBlogComment.comments);
    } catch (error) {
      return res.status(422).send(error.message);
    }
  } else {
    try {
      const NewComment = {
        text: commentdata.comment,
        name: commentdata.data.name,
        avatar: commentdata.data.picture,
        authId: commentdata.data.sub,
      };
      const bcomment = await blogComments.findById(comment[0]._id);
      bcomment.comments.unshift(NewComment);

      await bcomment.save();
      res.json(bcomment.comments);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
};

exports.deleteComment = async (req, res) => {
  try {
    const blog = await blogComments.findById(req.params.id);
    const comment = blog.comments.find(
      (comment) => comment.id === req.params.comment_id
    );

    if (!comment) {
      return res.status(404).json({ msg: "Comment does not exist" });
    }

    // Get remove index
    const removeIndex = blog.comments
      .map((comment) => comment._id)
      .indexOf(req.params.comment_id);

    blog.comments.splice(removeIndex, 1);

    await blog.save();

    res.json(blog.comments);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
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
