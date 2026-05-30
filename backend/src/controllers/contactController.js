// =====================================
// src/controllers/contactController.js
// ===================================== CONTACT CONTROLLER - NON-BLOCKING EMAIL
import { sendEmail } from "../services/emailService.js";

// ===================================== CONTACT FORM HANDLER
export const sendContact = async (req, res) => {
	const requestId = Math.random().toString(36).substring(2, 10);

	const { name, email, message } = req.body;

	try {
		console.log(`📩 [${requestId}] Incoming contact request`);
		console.log(`📦 [${requestId}] Payload:`, { name, email, message });

		// ================= BASIC VALIDATION =================
		if (!name || !email || !message) {
			return res.status(400).json({
				success: false,
				error: "All fields are required",
				requestId,
			});
		}

		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(email)) {
			return res.status(400).json({
				success: false,
				error: "Invalid email address",
				requestId,
			});
		}

		if (message.length < 10) {
			return res.status(400).json({
				success: false,
				error: "Message too short",
				requestId,
			});
		}

		// ================= IMPORTANT CHANGE =================
		// DO NOT block API on email sending
		sendEmail({ name, email, message })
			.then(() => {
				console.log(`✅ [${requestId}] Email sent`);
			})
			.catch((err) => {
				console.error(
					`❌ [${requestId}] Email failed (non-blocking):`,
					err.message,
				);
			});

		// ================= ALWAYS RESPOND FAST =================
		return res.status(200).json({
			success: true,
			message: "Message received successfully",
			requestId,
		});
	} catch (error) {
		console.error(`❌ [${requestId}] Unexpected error:`, error);

		return res.status(500).json({
			success: false,
			error: "Internal server error",
			requestId,
		});
	}
};
