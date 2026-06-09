// ===================================
// AUTO REPLY TEMPLATE
// src/email/templates/autoReply.js
// ===================================
import { emailBase } from "./emailBase.js";
import { EMAIL_ASSETS } from "../../email/assets/emailAssets.js";
import { socialIcons } from "../components/socialIcons.js";

// ===================================
export const autoReplyTemplate = (name) => {
	const websiteLink = `
	<a href="https://ebenezerking.com"
	style="color:#00ff91; text-decoration:underline;">
	ebenezerking.com
	</a>
	`;

	const copyright = `
	© ${new Date().getFullYear()} Ebenezer King. All rights reserved.
	`;

	const header = `
	<!-- ====================  AUTO REPLY EMAIL HEADER ==================== -->
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
		<!-- ================= AUTO REPLY BODY ================= -->
   		 <div style="text-align: center;">
      
         <!-- ================= AUTO REPLY MESSAGE CONTENT ================= -->
      	<h3 class="title" style="font-size: 20px; font-weight: 700; margin: 0 0 16px 0; color: #00ff91; background-color: #000000; border-top: 4px solid #00ff91; border-radius: 12px; padding: 4px;">
        Hi ${name}! ✨
     	 </h3>
      
     	 <div class="message-box" style="background: #000000; padding: 15px; border-left: 4px solid #00ff91; border-right: 4px solid #00ff91; border-radius: 12px; margin: 20px 0;">
        <p class="text" style="font-size: 14px; margin: 0 0 15px 0; color: #00ff91;">
          I've received your message and will get back to you within 24 hours.
      	  </p>
        
        	<p class="text" style="font-size: 14px; margin: 0 0 20px 0; color: #00ff91;">
          	In the meantime, feel free to explore my work:
        	</p>
        
		<!-- ================= AUTO REPLY ACTION BUTTONS ================= -->
        <a href="https://ebenezerking.com"class="mobile-btn" style="display: inline-block; padding: 10px 20px; background-color: #000000; color: #00ff91; text-decoration: none; border: 1px solid #00ff91; border-radius: 8px; font-weight: 600; margin: 0 5px;">
          View Porfolio →
        </a>
      	</div>
      
        <!-- ================= AUTO REPLY QUICK TIP ================= -->
      	<div class="message-box" style="margin-top: 30px; padding: 20px; background: #000000; border-bottom: 4px solid #00ff91; border-radius: 12px;">
       	 <p style="font-size: 11px; color: #00ff91; margin: 0;">
          💡 Quick tip: Check out my latest projects while you wait!
        </p>	
      </div>
    </div>
  	`;

	const footer = `
    <!-- CLEAN FOOTER (NO IMAGE BACKGROUND) -->
    <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #000000; max-width: 600px;">
      <tr>
        <td align="center" valign="top" style="padding: 20px 20px; background-color: #000000; border: 4px solid #00ff91">
          
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
		previewText:
			"Thank you for reaching out! I'll respond to your message shortly.",
	});
};
