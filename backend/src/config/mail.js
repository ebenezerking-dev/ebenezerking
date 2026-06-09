// =====================================
// MAIL TRANSPORTER
// src/config/mail.js
// =====================================
import nodemailer from "nodemailer";
import env from "./env.js";

// =====================================
const transporter = nodemailer.createTransport({
	host: env.mailHost,
	port: env.mailPort,
	auth: {
		user: env.mailUser,
		pass: env.mailPass,
	},
});

transporter.verify((error) => {
	if (error) {
		console.error("❌ Mailtrap Error:", error);
	} else {
		console.log("✅ Mailtrap Connected");
	}
});

export default transporter;
