// =====================================
// EMAIL SERVICE (RESEND - PRODUCTION SAFE)
// =====================================
import { Resend } from "resend";
import env from "../config/env.js";

// ===================================== LOG
console.log("🔥 EMAIL SERVICE VERSION: RESEND v1");

// ===================================== VALIDATION (MUST COME FIRST)
if (!env.RESEND_API_KEY) {
	console.error("❌ RESEND_API_KEY is missing");
}

// ===================================== RESEND INIT
const resend = new Resend(env.RESEND_API_KEY);

// ===================================== HTML ESCAPE
const escapeHTML = (text = "") =>
	String(text).replace(/</g, "&lt;").replace(/>/g, "&gt;");

// ===================================== TEMPLATE (UNCHANGED)
const adminTemplate = ({ name, email, message }) => `
  <div style="font-family: Unna, Arial, sans-serif; color:#22050c; background:#f6f7fb; padding:20px;">
    <div style="max-width:600px;margin:auto;background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 10px 25px rgba(0,0,0,0.1);">

      <div style="background: linear-gradient(180deg, #8ad6ed, #00485d);padding:20px;color:#fff;text-align:center;">
        <h2 style="margin:0;">New Contact Message</h2>
      </div>

      <div style="padding:20px;">
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <hr />
        <p><strong>Message:</strong></p>
        <p style="background:#f3f3f3;padding:12px;border-left:4px solid #8e2de2;">
          ${message}
        </p>
      </div>
    </div>
  </div>
`;

// =====================================
const autoReplyTemplate = (name) => `
  <div style="font-family: Unna, Arial, sans-serif; padding:20px;">
    <div style="max-width:600px;margin:auto;background:#fff;border-radius:10px;padding:20px;">
      <h2>Good Day <strong>${name}!</strong></h2>
      <p>Thanks for reaching out!</p>
      <p>I’ve received your message and will get back to you shortly.</p>
    </div>
  </div>
`;

// ===================================== MAIN FUNCTION
export const sendEmail = async ({ name, email, message }) => {
	const safeName = escapeHTML(name);
	const safeEmail = escapeHTML(email);
	const safeMessage = escapeHTML(message);

	console.log("📨 Sending admin email...");

	// ================= ADMIN EMAIL
	try {
		const adminResult = await resend.emails.send({
			from: "Ebenezer King <contact@ebenezerking.com>",
			to: env.GMAIL_USER,
			replyTo: safeEmail,
			subject: `📩 New Contact Message from ${safeName}`,
			html: adminTemplate({
				name: safeName,
				email: safeEmail,
				message: safeMessage,
			}),
		});

		console.log("✅ Admin email sent:", adminResult?.data?.id);
	} catch (err) {
		console.error("❌ Admin email failed:", err);
		throw err;
	}

	// ================= AUTO REPLY
	try {
		const autoReplyResult = await resend.emails.send({
			from: "Ebenezer King <contact@ebenezerking.com>",
			to: safeEmail,
			subject: `🚀 Thanks for contacting me, ${safeName}`,
			html: autoReplyTemplate(safeName),
		});

		console.log("📨 Auto-reply sent:", autoReplyResult?.data?.id);
	} catch (err) {
		console.error("❌ Auto-reply failed:", err);
		throw err;
	}
};
