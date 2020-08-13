const mongoose = require("mongoose");
const ContactMe = mongoose.model("Contact");
const { check, validationResult } = require("express-validator");

exports.contactMe = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const contactMeData = req.body;
  const contactme = new ContactMe(contactMeData);
  try {
    const newContactme = await contactme.save();
    return res.json(newContactme);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
}


