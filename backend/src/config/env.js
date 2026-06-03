// =====================================
// ENV CONFIG (PRODUCTION SAFE)
// src/config/env.js
// =====================================
import dotenv from "dotenv";

// =====================================
dotenv.config();

// =====================================
// REQUIRED ENV
// =====================================
const required = (key) => {
	const value = process.env[key];
	if (!value) throw new Error(`❌ Missing ENV: ${key}`);
	return value;
};

// =====================================
// HELPER TO PASS ARRAY FROM ENV
const parseArrayEnv = (value) => {
	if (!value) return [];
	return value
		.split(",")
		.map((item) => item.trim())
		.filter(Boolean);
};

// =====================================
const env = {
	PORT: process.env.PORT || 3000,
	ALLOWED_ORIGINS: parseArrayEnv(process.env.ALLOWED_ORIGINS),
	FRONTEND_URL: process.env.FRONTEND_URL || "",
	MONGO_URI: required("MONGO_URI"),
	CLOUDINARY_URL: required("CLOUDINARY_URL"),
	GMAIL_USER: required("GMAIL_USER"),
	RESEND_API_KEY: required("RESEND_API_KEY"),
	NODE_ENV: process.env.NODE_ENV || "development",
};

export default env;
