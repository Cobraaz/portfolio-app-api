const express = require("express");
const router = express.Router();
const { check } = require("express-validator");

const {
  addComment,
  getComments,
  deleteComment,
  likeComment,
  unlikeComment,
} = require("../controllers/comments");

router.patch(
  "/:slug",
  [
    [
      check("comment", "Comment is required").not().isEmpty(),
      check("data", "User Detail is required").not().isEmpty(),
    ],
  ],
  addComment
);

router.get("/comments/:slug", getComments);
router.delete("/comments/:id/:comment_id", deleteComment);
router.put("/comments/like/:id/:comment_id", likeComment);
router.put("/comments/unlike/:id/:comment_id", unlikeComment);

module.exports = router;
