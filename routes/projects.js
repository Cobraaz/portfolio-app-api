const express = require("express");
const router = express.Router();
const { checkJwt, checkRole } = require("../controllers/auth");
const {
  getProjects,
  createProjects,
  updateProject,
  getProjectById,
  deleteProject,
} = require("../controllers/projects");

router.get("", getProjects);
router.get("/:id", getProjectById);

router.post("", checkJwt, checkRole("admin"), createProjects);
router.patch("/:id", checkJwt, checkRole("admin"), updateProject);
router.delete("/:id", checkJwt, checkRole("admin"), deleteProject);
module.exports = router;
