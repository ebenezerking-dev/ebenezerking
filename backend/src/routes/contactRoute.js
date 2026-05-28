// =====================================
// src/routes/contactRoute.js
// ===================================== CONTACT ROUTES - FOR CONTACT FORM SUBMISSIONS
import express from "express";
import { sendContact } from "../controllers/contactController.js";
import { validateContact } from "../middleware/contactValidator.js";

const router = express.Router();

router.post("/", validateContact, sendContact);

export default router;