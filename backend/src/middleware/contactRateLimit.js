// =====================================
// CONTACT RATE LIMIT
// src/middleware/contactRateLimit.js
// =====================================
import rateLimit from "express-rate-limit";

// =====================================
export const contactRateLimit = rateLimit({
	windowMs: 60 * 1000, 
	max: 2,
	standardHeaders: true,
	legacyHeaders: false,

	message: {
		success: false,
		message: "Too many requests. Please wait a moment.",
	},
});
