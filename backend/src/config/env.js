// =====================================
// src/config/env.js
// ===================================== ENVIRONMENT VARIABLES WRAPPER
import dotenv from "dotenv";

dotenv.config();

// =====================================
const env = {
	PORT: process.env.PORT,
	mongoURI: process.env.MONGO_URI,

	sendGridApiKey: process.env.SENDGRID_API_KEY,
	sendGridSender: process.env.SENDGRID_SENDER,
	sendGridRecipient: process.env.SENDGRID_RECIPIENT,
};

export default env;
