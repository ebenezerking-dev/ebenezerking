// =====================================
// CONTACT ROUTES
// src/routes/contactRoute.js
// ===================================== 
import express from "express";
import { sendContact } from "../controllers/contactController.js";
import { validateContact } from "../middleware/contactValidator.js";
import { contactRateLimit } from "../middleware/contactRateLimit.js";

const router = express.Router();

router.post("/", contactRateLimit, validateContact, sendContact);

export default router;