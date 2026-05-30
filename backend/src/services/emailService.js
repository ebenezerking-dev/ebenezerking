// =====================================
// src/services/emailService.js
// ===================================== EMAIL SERVICE USING NODEMAILER
import nodemailer from "nodemailer";
import env from "../config/env.js";

// ===================================== TRANSPORTER (STABLE GMAIL CONFIG)
const transporter = nodemailer.createTransport({
	host: "smtp.gmail.com",
	port: 465,
	secure: true,
	auth: {
		user: env.GMAIL_USER,
		pass: env.GMAIL_APP_PASSWORD,
	},
	pool: false,

	// 🔥 stability improvements for Render
	connectionTimeout: 10000,
	greetingTimeout: 10000,
	socketTimeout: 15000,
});

// ===================================== DEBUG LOG
console.log("🔥 EMAIL SERVICE VERSION: GMAIL STABLE v3");

// ===================================== HTML ESCAPE
const escapeHTML = (text = "") =>
	String(text).replace(/</g, "&lt;").replace(/>/g, "&gt;");

// ===================================== RETRY WRAPPER (CRITICAL FOR RENDER)
const sendWithRetry = async (mailOptions, retries = 2) => {
	try {
		console.time("EMAIL_SEND");
		return await transporter.sendMail(mailOptions);
		console.timeEnd("EMAIL_SEND");
	} catch (err) {
		if (retries <= 0) throw err;

		console.warn("⚠️ Email retrying... attempts left:", retries);

		// small delay before retry
		await new Promise((r) => setTimeout(r, 1000));

		return sendWithRetry(mailOptions, retries - 1);
	}
};

// ===================================== ADMIN TEMPLATE
const adminTemplate = ({ name, email, message }) => `
  <div style="font-family: Unna, Arial, sans-serif; color:#22050c; background:#f6f7fb; padding:20px; line-height:1.5;">
    <div style="max-width:600px;margin:auto;background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 10px 25px rgba(0,0,0,0.1);">

      <div style="background: linear-gradient(180deg, #22050c, #ABE0F0, #22050c);padding:20px;color:#fff;text-align:center;">
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

// ===================================== AUTO REPLY TEMPLATE
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

// ===================================== MAIN FUNCTION (STABLE)
export const sendEmail = async ({ name, email, message }) => {
	const safeName = escapeHTML(name);
	const safeEmail = escapeHTML(email);
	const safeMessage = escapeHTML(message);

	console.log("📨 Sending admin email...");

	// ================= ADMIN EMAIL
	await sendWithRetry({
		from: `"Portfolio Contact" <${env.GMAIL_USER}>`,
		to: env.GMAIL_USER,
		replyTo: safeEmail,
		subject: `📩 New Contact Message from ${safeName}`,
		html: adminTemplate({
			name: safeName,
			email: safeEmail,
			message: safeMessage,
		}),
	});

	console.log("✅ Admin email sent");

	// ================= AUTO REPLY
	console.log("📨 Sending auto-reply to:", safeEmail);

	await sendWithRetry({
		from: `"Ebenezer King" <${env.GMAIL_USER}>`,
		to: safeEmail,
		subject: `🚀 Thanks for contacting me, ${safeName}`,
		html: autoReplyTemplate(safeName),
	});

	console.log("📨 Auto-reply sent successfully");
};
