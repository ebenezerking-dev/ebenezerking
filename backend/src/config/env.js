// =====================================
// src/config/env.js
// ===================================== ENVIRONMENT VARIABLES WRAPPER
import dotenv from "dotenv";

dotenv.config();

// =====================================
const env = {
	PORT: process.env.PORT,
	mongoURI: process.env.MONGO_URI,

	GMAIL_USER: process.env.GMAIL_USER,
	GMAIL_APP_PASSWORD: process.env.GMAIL_APP_PASSWORD,
};

export default env;
