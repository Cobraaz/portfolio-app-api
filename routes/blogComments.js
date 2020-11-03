const express = require("express");
const router = express.Router();
const { check } = require("express-validator");

const {
  addComment,
  getComments,
  deleteComment,
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
module.exports = router;
