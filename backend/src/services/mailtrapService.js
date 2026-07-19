// =====================================
// MAILTRAP EMAIL SERVICE
// Email Testing Ground
// src/services/mailtrapService.js
// =====================================
import transporter from "../config/mail.js";
import { adminTemplate } from "../email/templates/adminTemplate.js";
import { autoReplyTemplate } from "../email/templates/autoReplyTemplate.js";
import { careerConfig } from "../utils/careerConfig.js";
import { escapeHTML } from "../utils/escapeHTML.js";

// =====================================
export const sendEmail = async ({ name, email, message, career, imageUrl }) => {
	const safeName = escapeHTML(name);
	const safeEmail = escapeHTML(email);
	const safeMessage = escapeHTML(message);
	const safeCareer = escapeHTML(career);

	// =====================================
	// ADMIN EMAIL
	// =====================================
	console.log("📨 Sending Admin Template");
	console.log("✅ Notification sent");
	console.log({
		name: safeName,
		email: safeEmail,
		imageUrl,
	});

	await transporter.sendMail({
		from: '"Ebenezer King" <test@ebenezerking.com>',
		to: "admin@example.com",
		replyTo: safeEmail,
		subject: `📩 [${careerConfig[safeCareer]?.title ?? "Portfolio"}] New Contact Form Submission`,
		html: adminTemplate({
			name: safeName,
			email: safeEmail,
			message: safeMessage,
			career: safeCareer,
			imageUrl,
		}),
	});

	// =====================================
	// AUTO REPLY
	// =====================================
	console.log("📨 Sending Auto Reply Template");
	console.log("✅ Auto reply sent");

	await transporter.sendMail({
		from: '"Ebenezer King" <test@ebenezerking.com>',
		to: safeEmail,
		subject: `🎉 Thanks for contacting my ${careerConfig[safeCareer]?.title ?? "Portfolio"}`,
		html: autoReplyTemplate({
			name: safeName,
			career: safeCareer,
		}),
	});

	console.log("✅ Mailtrap emails sent");
};
