// ===================================
// ADMIN TEMPLATE
// src/email/templates/adminTemplate.js
// ===================================
import { emailBase } from "./emailBase.js";
import { socialIcons } from "../components/socialIcons.js";
import { EMAIL_ASSETS } from "../../email/assets/emailAssets.js";

// ===================================
console.log("📨 Sending notification email");

export const adminTemplate = ({ name, email, message }) => {
	const copyright = `© ${new Date().getFullYear()} Ebenezer King. All rights reserved.`;

	const header = `
    <table width="100%" cellpadding="0" cellspacing="0" border="0">
      <tr>
        <td align="center" valign="top" style="padding: 0;">
          <img
            src="${EMAIL_ASSETS.header}"
            width="600"
            class="img-responsive"
            style="display: block; width: 100%; max-width: 600px; height: auto; border: 0;"
            alt="Email Header"
          />
        </td>
      </tr>
    </table>
  `;

	const body = `
    <!-- CONTACT INFORMATION CARD -->
    <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 25px;">
      <tr>
        <td style="padding: 0;">
          <table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-top: 4px solid #00ff91; border-radius: 12px; background-color: #000000;">
            <tr>
              <td style="padding: 15px; border-bottom: 1px solid #00ff91; background-color: #000000;">
                <span style="font-size: 18px; font-weight: 700; color: #00ff91;">🚀 Contact Information</span>
              </td>
            </tr>
            <tr>
              <td style="padding: 15px; background-color: #000000;">
                <div style="margin-bottom: 15px;">
                  <span style="display: inline-block; width: 80px; font-weight: 700; color: #00ff91;">Name:</span>
                  <span style="display: inline-block; font-weight: 500; color: #00ff91;">${name}</span>
                </div>
                <div style="margin-bottom: 15px;">
                  <span style="display: inline-block; width: 80px; font-weight: 700; color: #00ff91;">Email:</span>
                  <span style="display: inline-block;">
                    <a href="mailto:${email}" style="color: #00ff91; text-decoration: none; font-weight: 500;">${email}</a>
                  </span>
                </div>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>

    <!-- MESSAGE CONTENT -->
    <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 30px;">
      <tr>
        <td style="padding: 0;">
          <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #000000; border-radius: 12px; border-bottom: 4px solid #00ff91;">
            <tr>
              <td style="padding: 25px 15px 15px 15px; background-color: #000000;">
                <span style="font-size: 18px; font-weight: 700; color: #00ff91;">💬 Message Content</span>
              </td>
            </tr>
            <tr>
              <td style="padding: 0 15px 25px 15px; background-color: #000000;">
                <div style="background-color: #000000; color: #00ff91; padding: 20px; border: 1px solid #00ff91; border-radius: 8px; font-size: 15px; line-height: 1.6;">
                  ${message.replace(/\n/g, "<br>")}
                </div>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>

    <!-- ACTION BUTTONS -->
    <table width="100%" cellpadding="0" cellspacing="0" border="0">
      <tr>
        <td align="center" style="padding: 0;">
          <a href="mailto:${email}" class="mobile-btn" style="display: inline-block; padding: 10px 20px; background-color: #000000; color: #00ff91; text-decoration: none; border: 1px solid #00ff91; border-radius: 8px; font-weight: 600; margin: 0 5px 10px 5px;">
            Reply to ${name.split(" ")[0]}
          </a>
          <a href="https://ebenezerking.com" class="mobile-btn" style="display: inline-block; padding: 10px 20px; background-color: #000000; color: #00ff91; text-decoration: none; border: 1px solid #00ff91; border-radius: 8px; font-weight: 600; margin: 0 5px;">
            View Portfolio →
          </a>
        </td>
      </tr>
    </table>
  `;

	const footer = `
    <!-- CLEAN FOOTER (NO IMAGE BACKGROUND) -->
    <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #000000; max-width: 600px;">
      <tr>
        <td align="center" valign="top" style="padding: 20px 20px; background-color: #000000; border-bottom: 5px solid #00ff91">
          
          <!-- LOGO -->
          <div align="center">
            <img 
              src="${EMAIL_ASSETS.logo}"
              width="130"
              style="display:block; width:130px; max-width:130px; margin:0 auto;"
              alt="Logo" 
            />
          </div>
          
          <!-- SOCIAL ICONS -->
          <div align="center" style="margin-top: 20px;">
            ${socialIcons}
          </div>
          
          <!-- COPYRIGHT -->
          <div align="center" style="margin-top: 20px;">
            <p style="margin:0; font-size:10px; font-weight:300; text-align:center; color: #00ff91;">
              ${copyright}
            </p>
          </div>
          
        </td>
      </tr>
    </table>
  `;

	return emailBase({
		header,
		body,
		footer,
		previewText: `New message from ${name} via your portfolio contact form`,
	});
};
