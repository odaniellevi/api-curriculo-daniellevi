const express = require("express");
const router = express.Router();

const {
  getAllEducations,
  getEducationById,
  createEducation,
  updateEducation,
  deleteEducation,
} = require("../controllers/educationController.js");

router.get("/", getAllEducations);
router.get("/:id", getEducationById);
router.post("/", createEducation);
router.put("/:id", updateEducation);
router.delete("/:id", deleteEducation);

module.exports = router;
