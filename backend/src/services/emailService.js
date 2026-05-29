// =====================================
// src/services/emailService.js
// ===================================== EMAIL SERVICE USING NODEMAILER
import nodemailer from "nodemailer";
import env from "../config/env.js";

// =====================================
const transporter = nodemailer.createTransport({
	host: "smtp.gmail.com",
	port: 587,
	secure: false,
	auth: {
		user: env.GMAIL_USER,
		pass: env.GMAIL_APP_PASSWORD,
	},
});

// =====================================
// EMAIL TEMPLATE (ADMIN NOTIFICATION)
const adminTemplate = ({ name, email, message }) => `
  <div style="font-family: Arial, sans-serif; background:#f6f7fb; padding:20px;">
    <div style="max-width:600px;margin:auto;background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 10px 25px rgba(0,0,0,0.1);">

      <div style="background:linear-gradient(90deg,#f97316,#450693);padding:20px;color:#fff;text-align:center;">
        <h2 style="margin:0;">New Contact Message</h2>
      </div>

      <div style="padding:20px;">
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>

        <hr />

        <p style="margin-top:10px;"><strong>Message:</strong></p>
        <p style="background:#f3f3f3;padding:12px;border-left:4px solid #8e2de2;">
          ${message}
        </p>
      </div>
    </div>
  </div>
`;

// =====================================
// EMAIL TEMPLATE (AUTO REPLY TO USER)
const autoReplyTemplate = (name) => `
  <div style="font-family: Arial, sans-serif; padding:20px; background:#f9fafb;">
    <div style="max-width:600px;margin:auto;background:#fff;border-radius:10px;padding:20px;box-shadow:0 10px 20px rgba(0,0,0,0.05);">

      <h2 style="color:#450693;">Hi ${name}, 👋</h2>

      <p>Thanks for reaching out!</p>

      <p>I’ve received your message and will get back to you as soon as possible.</p>

      <hr />

      <p style="font-size:12px;color:#777;">
        This is an automated response from my portfolio contact system.
      </p>
    </div>
  </div>
`;

// =====================================
export const sendEmail = async ({ name, email, message }) => {
	try {
		// ================= ADMIN EMAIL =================
		await transporter.sendMail({
			from: `"Portfolio Contact" <${env.GMAIL_USER}>`,
			to: env.GMAIL_USER,
			replyTo: email,
			subject: `📩 New Contact Message from ${name}`,
			html: adminTemplate({ name, email, message }),
		});

		// ================= AUTO REPLY =================
		await transporter.sendMail({
			from: `"Portfolio" <${env.GMAIL_USER}>`,
			to: email,
			subject: `✅ Thanks for contacting me, ${name}`,
			html: autoReplyTemplate(name),
		});

		console.log("✅ Admin email + auto-reply sent successfully");
	} catch (error) {
		console.error("❌ Nodemailer error:", error);
		throw error;
	}
};
