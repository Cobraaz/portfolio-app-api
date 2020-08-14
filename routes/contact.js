const express = require("express");
const router = express.Router();
const { check } = require("express-validator");

const { contactMe } = require("../controllers/contact");

router.post(
  "",
  [
    [
      check("fullName", "FullName is required").not().isEmpty(),
      check("phoneno", "Phone No is required").not().isEmpty(),
      check("email", "Please include a valid email").isEmail(),
      check("message", "Message is required").not().isEmpty(),
    ],
  ],
  contactMe
);

module.exports = router;
