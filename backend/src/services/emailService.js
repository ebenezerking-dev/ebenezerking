// =====================================
// src/services/emailService.js
// ===================================== EMAIL SERVICE USING RESEND
import { Resend } from "resend";
import env from "../config/env.js";

// ===================================== RESEND INIT
const resend = new Resend(env.RESEND_API_KEY);

// ===================================== DEBUG LOG
console.log("🔥 EMAIL SERVICE VERSION: RESEND v1");

// ===================================== HTML ESCAPE
const escapeHTML = (text = "") =>
	String(text).replace(/</g, "&lt;").replace(/>/g, "&gt;");

// ===================================== ADMIN TEMPLATE (UNCHANGED)
const adminTemplate = ({ name, email, message }) => `
  <div style="font-family: Unna, Arial, sans-serif; color:#22050c; background:#f6f7fb; padding:20px; line-height:1.5;">
    <div style="max-width:600px;margin:auto;background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 10px 25px rgba(0,0,0,0.1);">

      <div style="background: linear-gradient(180deg, #8ad6ed, #8ad6ed, #00485d);padding:20px;color:#fff;text-align:center;">
        <h2 style="margin:0;">New Contact Message</h2>
      </div>

      <div style="padding:20px;">
        <p><strong>Name:</strong> <strong>${name}</strong></p>
        <p><strong>Email:</strong> <strong>${email}</strong></p>

        <hr />

        <p><strong>Message:</strong></p>

        <p style="background:#f3f3f3;padding:12px;border-left:4px solid #8e2de2;">
          ${message}
        </p>
      </div>
    </div>
  </div>
`;

// ===================================== AUTO REPLY TEMPLATE (UNCHANGED)
const autoReplyTemplate = (name) => `
  <div style="font-family: Unna, Arial, sans-serif; color:#22050c; padding:20px;">
    <div style="max-width:600px;margin:auto;background:#fff;border-radius:10px;padding:20px;box-shadow:0 10px 20px rgba(0,0,0,0.05);">

      <h2>Good Day <strong>${name}!</strong></h2>

      <p>Thanks for reaching out!</p>
      <p>I’ve received your message and will get back to you shortly.</p>

      <hr />

      <p style="font-size:12px;color:#777;">
        Automated message from King's portfolio system.
      </p>
    </div>
  </div>
`;

// ===================================== MAIN FUNCTION (RESEND VERSION)
export const sendEmail = async ({ name, email, message }) => {
	const safeName = escapeHTML(name);
	const safeEmail = escapeHTML(email);
	const safeMessage = escapeHTML(message);

	console.log("📨 Sending admin email...");

	try {
		// ================= ADMIN EMAIL
		const adminResult = await resend.emails.send({
			from: "Portfolio Contact <onboarding@resend.dev>",
			to: env.GMAIL_USER, // your receiving email (Gmail for now)
			reply_to: safeEmail,
			subject: `📩 New Contact Message from ${safeName}`,
			html: adminTemplate({
				name: safeName,
				email: safeEmail,
				message: safeMessage,
			}),
		});

		console.log("✅ Admin email sent:", adminResult);
	} catch (err) {
		console.error("❌ Admin email failed:", err);
		throw err;
	}

	console.log("📨 Sending auto-reply to:", safeEmail);

	try {
		// ================= AUTO REPLY
		const autoReplyResult = await resend.emails.send({
			from: "Ebenezer King <onboarding@resend.dev>",
			to: safeEmail,
			subject: `🚀 Thanks for contacting me, ${safeName}`,
			html: autoReplyTemplate(safeName),
		});

		console.log("📨 Auto-reply sent successfully:", autoReplyResult);
	} catch (err) {
		console.error("❌ Auto-reply failed:", err);
		throw err;
	}
};
