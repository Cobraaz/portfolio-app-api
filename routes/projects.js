const express = require("express");
const router = express.Router();
const { getProjects } = require("../controllers/projects");

router.get("", getProjects);

module.exports = router;
