// =====================================
// EMAIL SERVICE
// src/services/cloudinaryService.js
// =====================================
import { Resend } from "resend";
import env from "../config/env.js";
import { adminTemplate } from "../email/templates/adminTemplate.js";
import { autoReplyTemplate } from "../email/templates/autoReplyTemplate.js";
import { escapeHTML } from "../utils/escapeHTML.js";

// =====================================
const resend = new Resend(env.RESEND_API_KEY);

// =====================================
export const sendEmail = async ({ name, email, message, imageUrl }) => {
	const safeName = escapeHTML(name);
	const safeEmail = escapeHTML(email);
	const safeMessage = escapeHTML(message);

	// ===================================== ADMIN EMAIL
	await resend.emails.send({
		from: "Ebenezer King <contact@ebenezerking.com>",
		to: env.GMAIL_USER,
		replyTo: safeEmail,
		subject: `📩 New Contact Message from ${safeName}`,
		html: adminTemplate({
			name: safeName,
			email: safeEmail,
			message: safeMessage,
			imageUrl,
		}),
	});

	// ===================================== AUTO REPLY
	await resend.emails.send({
		from: "Ebenezer King <contact@ebenezerking.com>",
		to: safeEmail,
		subject: `🎉 Thanks for contacting me, ${safeName}`,
		html: autoReplyTemplate(safeName),
	});
};
