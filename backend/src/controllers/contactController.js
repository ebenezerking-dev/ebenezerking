// =====================================
// CONTACT CONTROLLER
// src/controllers/contactController.js
// =====================================
import { sendEmail } from "../services/emailService.js";
// import { sendEmail } from "../services/mailtrapService.js";
import { uploadImage } from "../services/cloudinaryService.js";

// =====================================
export const sendContact = async (req, res) => {
	const requestId = Math.random().toString(36).substring(2, 10);

	const { name, email, message } = req.body;

	try {
		console.log(`📩 [${requestId}] Incoming contact request`);
		console.log(`📦 [${requestId}] Payload:`, { name, email, message });

		// ================= VALIDATION =================
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

		// ================= DEFAULT IMAGE =================
		let imageUrl = "https://res.cloudinary.com/default-image.png";

		// ================= OPTIONAL CLOUDINARY UPLOAD =================
		if (req.file?.path) {
			imageUrl = await uploadImage(req.file.path);
		}

		// ================= NON-BLOCKING EMAIL =================
		sendEmail({ name, email, message, imageUrl })
			.then(() => {
				console.log(`✅ [${requestId}] Email sent`);
			})
			.catch((err) => {
				console.error(
					`❌ [${requestId}] Email failed (non-blocking):`,
					err.message,
				);
			});

		// ================= FAST RESPONSE =================
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
