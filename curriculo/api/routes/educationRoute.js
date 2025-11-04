import express from "express";
import {
  getAllEducations,
  getEducationById,
  createEducation,
  updateEducation,
  deleteEducation,
} from "../controllers/educationController.js";

const router = express.Router();

router.get("/", getAllEducations);
router.get("/:id", getEducationById);
router.post("/", createEducation);
router.put("/:id", updateEducation);
router.delete("/:id", deleteEducation);

export default router;
