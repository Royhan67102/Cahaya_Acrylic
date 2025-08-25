import express from "express";
import {
  getTesti,
  getTestiById,
  createTesti,
  updateTesti,
  deleteTesti
} from "../controller/TestiController.js";
import upload from "../upload/upload.js";

const router = express.Router();

// routes
router.get("/testi", getTesti);
router.get("/testi/:id", getTestiById);
router.post("/testi", upload.single("foto"), createTesti);
router.put("/testi/:id", upload.single("foto"), updateTesti);
router.delete("/testi/:id", deleteTesti);

export default router;
