// =====================================
// EMAIL SERVICE
// src/services/emailService.js
// =====================================
import { Resend } from "resend";
import env from "../config/env.js";
import { adminTemplate } from "../email/templates/adminTemplate.js";
import { autoReplyTemplate } from "../email/templates/autoReplyTemplate.js";
import { careerConfig } from "../utils/careerConfig.js";
import { escapeHTML } from "../utils/escapeHTML.js";

// =====================================
const resend = new Resend(env.RESEND_API_KEY);

// =====================================
export const sendEmail = async ({ name, email, message, career, imageUrl }) => {
	const safeName = escapeHTML(name);
	const safeEmail = escapeHTML(email);
	const safeMessage = escapeHTML(message);
	const safeCareer = escapeHTML(career);

	// ===================================== ADMIN EMAIL
	await resend.emails.send({
		from: "Ebenezer King <contact@ebenezerking.com>",
		to: env.GMAIL_USER,
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

	// ===================================== AUTO REPLY
	await resend.emails.send({
		from: "Ebenezer King <contact@ebenezerking.com>",
		to: safeEmail,
		subject: `🎉 Thanks for contacting my ${careerConfig[safeCareer]?.title ?? "Portfolio"}`,
		html: autoReplyTemplate({
			name: safeName,
			career: safeCareer,
		}),
	});
};
