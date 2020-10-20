const express = require("express");
const router = express.Router();
const { check } = require("express-validator");

const { addComment, getComments } = require("../controllers/comments");

router.post(
  "/:id",
  [
    [
      check("comment", "Comment is required").not().isEmpty(),
      check("data", "User Detail is required").not().isEmpty(),
    ],
  ],
  addComment
);

router.get("/getcomment/:id", getComments);

module.exports = router;
