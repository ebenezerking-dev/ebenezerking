// =====================================
// src/services/emailService.js
// ===================================== EMAIL SERVICE USING NODEMAILER
import nodemailer from "nodemailer";
import env from "../config/env.js";

// ===================================== TRANSPORTER
const transporter = nodemailer.createTransport({
	host: "smtp.gmail.com",
	port: 587,
	secure: false,
	auth: {
		user: env.GMAIL_USER,
		pass: env.GMAIL_APP_PASSWORD,
	},
});

// ===================================== HTML ESCAPE (SECURITY)
const escapeHTML = (text = "") =>
	String(text).replace(/</g, "&lt;").replace(/>/g, "&gt;");

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

        <p style="margin-top:10px;"><strong>Message:</strong></p>

        <p style="background:#f3f3f3;padding:12px;border-left:4px solid #8e2de2;font-weight:bold;">
          ${message}
        </p>
      </div>
    </div>
  </div>
`;

// ===================================== AUTO REPLY TEMPLATE
const autoReplyTemplate = (name) => `
  <div style="font-family: Unna, Arial, sans-serif; color:#22050c; padding:20px; background:#f9fafb;">
    <div style="max-width:600px;margin:auto;background:#fff;border-radius:10px;padding:20px;box-shadow:0 10px 20px rgba(0,0,0,0.05);">

      <h2 style="color:#22050c;">Good Day <strong>${name}!</strong></h2>

      <p>Thanks for reaching out!</p>

      <p>I’ve received your message and will get back to you shortly.</p>

      <hr />

      <p style="font-size:12px;color:#777;">
        This is an automated response from King's portfolio contact system.
      </p>
    </div>
  </div>
`;

// ===================================== MAIN FUNCTION
export const sendEmail = async ({ name, email, message }) => {
	try {
		// ================= SANITIZE =================
		const safeName = escapeHTML(name);
		const safeEmail = escapeHTML(email);
		const safeMessage = escapeHTML(message);

		// ================= ADMIN EMAIL =================
		await transporter.sendMail({
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

		// ================= AUTO REPLY (FIXED + TEMPLATE USED) =================
		await transporter.sendMail({
			from: `"Ebenezer King" <${env.GMAIL_USER}>`,
			to: safeEmail,
			subject: `🚀 Thanks for contacting me, ${safeName}`,
			html: autoReplyTemplate(safeName),
		});
	} catch (error) {
		console.error("🔥 CONTACT ROUTE ERROR:", error);

		res.status(500).json({
			success: false,
			error: "Failed to send message. Please try again later.",
		});
	}
};
