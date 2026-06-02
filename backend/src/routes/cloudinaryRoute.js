// =====================================
// CLOUDINARY ROUTES
// src/routes/cloudinaryRoute.js
// =====================================
import express from "express";
import { uploadController } from "../controllers/cloudinaryController.js";
import { upload } from "../middleware/upload.js";

// =====================================
const router = express.Router();

// =====================================
router.post("/", upload.single("image"), uploadController);

export default router;
