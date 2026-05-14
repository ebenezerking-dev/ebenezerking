// =====================================
// src/middleware/contactValidator.js
// ===================================== CONTACT VALIDATOR - VALIDATES CONTACT FORM INPUTS

export const validateContact = (req, res, next) => {
	const { name, email, message } = req.body;

	// ================= BASIC VALIDATION =================
	if (!name || !email || !message) {
		return res.status(400).json({
			success: false,
			error: "All fields are required",
		});
	}

	// ================= EMAIL VALIDATION =================
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

	if (!emailRegex.test(email)) {
		return res.status(400).json({
			success: false,
			error: "Invalid email",
		});
	}

	// ================= MESSAGE VALIDATION =================
	if (message.length < 10) {
		return res.status(400).json({
			success: false,
			error: "Message is too short (minimum 10 characters)",
		});
	}

	next();
};