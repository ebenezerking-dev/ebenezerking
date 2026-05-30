// =====================================
// src/controllers/contactController.js
// ===================================== CONTACT CONTROLLER - HANDLES CONTACT FORM SUBMISSIONS
import { sendEmail } from "../services/emailService.js";

// ===================================== CONTACT FORM HANDLER
export const sendContact = async (req, res) => {
	const requestId = Math.random().toString(36).substring(2, 10);

	try {
		const { name, email, message } = req.body;

		console.log(`📩 [${requestId}] Incoming contact request`);
		console.log(`📦 [${requestId}] Payload:`, { name, email, message });

		// ================= BASIC VALIDATION =================
		if (!name || !email || !message) {
			console.warn(`⚠️ [${requestId}] Missing fields`);

			return res.status(400).json({
				success: false,
				error: "All fields are required",
				requestId,
			});
		}

		// ================= EMAIL VALIDATION =================
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(email)) {
			console.warn(`⚠️ [${requestId}] Invalid email`);

			return res.status(400).json({
				success: false,
				error: "Invalid email address",
				requestId,
			});
		}

		// ================= MESSAGE VALIDATION =================
		if (message.length < 10) {
			console.warn(`⚠️ [${requestId}] Message too short`);

			return res.status(400).json({
				success: false,
				error: "Message is too short (minimum 10 characters)",
				requestId,
			});
		}

		// ================= SEND EMAIL =================
		console.log(`📨 [${requestId}] Sending email...`);

		await sendEmail({ name, email, message });

		console.log(`✅ [${requestId}] Contact message sent successfully`);

		return res.status(200).json({
			success: true,
			message: "Message sent successfully",
			requestId,
		});
	} catch (error) {
		console.error(`❌ [${requestId}] CONTACT ERROR:`, {
			message: error.message,
			stack: error.stack,
		});

		return res.status(500).json({
			success: false,
			error: "Failed to send message. Please try again later.",
			requestId,
		});
	}
};
