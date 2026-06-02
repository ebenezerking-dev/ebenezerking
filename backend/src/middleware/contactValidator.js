// =====================================
// CONTACT VALIDATOR
// src/middleware/contactValidator.js
// =====================================

export const validateContact = (req, res, next) => {
	let { name, email, message } = req.body;

	// =====================================
	// NORMALIZATION (IMPORTANT)
	// =====================================
	name = name?.trim();
	email = email?.trim();
	message = message?.trim();

	req.body.name = name;
	req.body.email = email;
	req.body.message = message;

	// =====================================
	// BASIC VALIDATION
	// =====================================
	if (!name || !email || !message) {
		return res.status(400).json({
			success: false,
			message: "All fields are required",
		});
	}

	// =====================================
	// EMAIL VALIDATION
	// =====================================
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

	if (!emailRegex.test(email)) {
		return res.status(400).json({
			success: false,
			message: "Invalid email format",
		});
	}

	// =====================================
	// MESSAGE VALIDATION
	// =====================================
	if (message.length < 10) {
		return res.status(400).json({
			success: false,
			message: "Message is too short (min 10 characters)",
		});
	}

	if (message.length > 2000) {
		return res.status(400).json({
			success: false,
			message: "Message is too long",
		});
	}

	next();
};