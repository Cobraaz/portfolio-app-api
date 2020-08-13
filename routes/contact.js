const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const ContactMe = mongoose.model("Contact");
const { check, validationResult } = require("express-validator");

const { contactMe } = require("../controllers/contact");

// router.post("", contactMe);

router.post(
  "",
  [
    [
      check("fullName", "FullName is required").not().isEmpty(),
      check("email", "Please include a valid email").isEmail(),
      check("message", "Message is required").not().isEmpty(),
    ],
  ],
  contactMe
);

module.exports = router;
