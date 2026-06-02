// =====================================
// ENV CONFIG (PRODUCTION SAFE)
// src/config/env.js
// =====================================
import dotenv from "dotenv";

// =====================================
dotenv.config();

// =====================================
// REQUIRED ENV HELPER (STRICT)
// =====================================
const required = (key) => {
	const value = process.env[key];

	if (!value) {
		throw new Error(`❌ Missing ENV: ${key}`);
	}

	return value;
};

// =====================================
const env = {
	PORT: process.env.PORT || 3000,
	allowedOrigins: process.env.ALLOWED_ORIGINS,

	MONGO_URI: required("MONGO_URI"),
	GMAIL_USER: required("GMAIL_USER"),
	RESEND_API_KEY: required("RESEND_API_KEY"),
};

export default env;
