// ===================================
// ADMIN TEMPLATE
// src/email/templates/adminTemplate.js
// ===================================
import { emailBase } from "./emailBase.js";
import { socialIcons } from "../components/socialIcons.js";
import { EMAIL_ASSETS } from "../../email/assets/emailAssets.js";

// ===================================
export const adminTemplate = ({ name, email, message }) => {
	const header = `
	<!-- ADMIN HEADER -->
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
	<!-- ADMIN BODY -->
	<!-- CONTACT INFORMATION HEADER CARD -->
    <div>

	<!-- CONTACT INFORMATION CARD -->
      <div style="background: #ffffff; border: 1px solid #e0e0e0; border-radius: 12px; overflow: hidden; margin-bottom: 25px;">
        <table width="100%" cellpadding="0" cellspacing="0" border="0">
          <tr style="background-color: #f8f9fa;">
            <td style="padding: 15px 20px; border-bottom: 2px solid #00485d;">
              <span style="font-size: 18px; font-weight: 700; color: #00485d;">Contact Information</span>
            </td>
          </tr>
          <tr>
            <td style="padding: 20px;">
              <div style="margin-bottom: 15px;">
                <div style="display: inline-block; width: 80px; font-weight: 700; color: #00485d;">Name:</div>
                <div style="display: inline-block; font-weight: 500; color: #333333;">${name}</div>
              </div>
              <div style="margin-bottom: 15px;">
                <div style="display: inline-block; width: 80px; font-weight: 700; color: #00485d;">Email:</div>
                <div style="display: inline-block;">
                  <a href="mailto:${email}" style="color: #006b88; text-decoration: none; font-weight: 500;">${email}</a>
                </div>
              </div>
              <div style="margin-bottom: 15px;">
                <div style="display: inline-block; width: 80px; font-weight: 700; color: #00485d;">IP Address:</div>
                <div style="display: inline-block; color: #666666;">Recorded</div>
              </div>
            </td>
          </tr>
        </table>
      </div>
      
      <!-- CONTACT MESSAGE CONTENT -->
      <div style="background: #f8f9fa; border-radius: 12px; padding: 25px; border-left: 4px solid #00ff91;">
        <div style="margin-bottom: 15px;">
          <span style="font-size: 18px; font-weight: 700; color: #00485d;">💬 Message Content</span>
        </div>
        <div style="background: #ffffff; padding: 20px; border-radius: 8px; min-height: 150px; font-size: 15px; line-height: 1.6; color: #333333;">
          ${message.replace(/\n/g, "<br>")}
        </div>
      </div>
      
      <!-- CONTACT ACTION BUTTONS -->
      <div style="text-align: center; margin-top: 30px;">
        <a href="mailto:${email}" class="btn" style="display: inline-block; padding: 12px 24px; background-color: #00485d; color: #ffffff; text-decoration: none; border-radius: 8px; font-weight: 600; margin: 0 5px;">
          Reply to ${name.split(" ")[0]}
        </a>
        <a href="https://ebenezerking.com" class="btn" style="display: inline-block; padding: 12px 24px; background-color: #ffffff; color: #00485d; text-decoration: none; border-radius: 8px; font-weight: 600; margin: 0 5px; border: 2px solid #00485d;">
          View Porfolio →
        </a>
      </div>
    </div>
  	`;

	const footer = `
	<!-- GENERAL FOOTER -->
	<table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #1a1a1a;">
 	 <tr>
    <td align="center" valign="middle"
        style="background-image: url('${EMAIL_ASSETS.footer}');
		background-size:100% 100%;
		background-position:center;
		background-repeat:no-repeat;
		width:100%;">

	<!-- ====================================== -->
      <!-- INNER CONTAINER - MOBILE - FOOTER -START -->
      <table class="mobile-footer" width="100%" height="120" cellpadding="0" cellspacing="0" border="0"
             style="display:none; max-width: 600px; width: 100%; margin: 0 auto; color: #00ff91;">

        <!-- ===================== -->
        <!-- TOP ROW (3 COLUMNS) -->
        <!-- ===================== -->
        <tr class="footer-row">

		  <!-- ===================== LOGO ===================== -->
          <td
              align="center"
              valign="bottom"
              width="33.33%"
			  style="text-align:center; padding: 0;">


            <img
              src="${EMAIL_ASSETS.logo}"
              width="120"
              class="logo-img"
              style="display:block; width:120px; max-width:120px; margin:0 auto;"
              alt="Logo"
            />
          </td>

          <!-- ===================== SOCIAL ===================== -->
          <td
              valign="bottom"
              width="33.33%"
              style="padding: 0;">

            <div class="social-wrapper" style="text-align:end; height:20px; padding: 0 20px 0 0;">
              ${socialIcons}
            </div>
          </td>

          <!-- ===================== WEBSITE ===================== -->
          <td
              align="right"
              valign="bottom"
              width="33.33%"
              style="text-align:end; padding: 0 0 0 20px;">

            <p class="website" style="text-align: start; height:20px;">
              <a href="https://ebenezerking.com"
                 style="font-size:16px; font-weight:500; color: #00ff91; text-decoration:underline; text-align: end;">
                ebenezerking.com
              </a>
            </p>
          </td>

        </tr>

        <!-- ===================== -->
        <!-- ===================== COPYRIGHT ROW ===================== -->
        <!-- ===================== -->
        <tr>
          <td colspan="3"
              align="center"
              width="100%"
              style="height: 28px; padding: 2px 0 18px;">

            <p
               style="margin:0; font-size:10px; font-weight:300; text-align:center;">
              © ${new Date().getFullYear()} Ebenezer King. All rights reserved.
            </p>

          </td>
        </tr>

      </table>
      <!-- INNER CONTAINER - MOBILE - FOOTER -END -->
	<!-- ======================================================= -->


	<!-- ======================================================= -->
	<!-- INNER CONTAINER - DESKTOP - FOOTER - START -->
      <table class="desktop-footer" width="100%" height="120" cellpadding="0" cellspacing="0" border="0"
             style="display:block; max-width: 600px; width: 100%; margin: 0 auto; color: #00ff91;">

        <!-- ===================== -->
        <!-- TOP ROW (3 COLUMNS) -->
        <!-- ===================== -->
        <tr class="footer-row">

          <!-- ===================== SOCIAL ===================== -->
          <td
              valign="bottom"
              width="33.33%"
              style="padding: 0;">

            <div class="social-wrapper" style="text-align:end; height:20px; padding: 0 20px 0 0;">
              ${socialIcons}
            </div>
          </td>
		  
		  <!-- ===================== LOGO ===================== -->
          <td
              align="center"
              valign="bottom"
              width="33.33%"
			  style="text-align:center; padding: 0;">


            <img
              src="${EMAIL_ASSETS.logo}"
              width="120"
              class="logo-img"
              style="display:block; width:120px; max-width:120px; margin:0 auto;"
              alt="Logo"
            />
          </td>

          <!-- ===================== WEBSITE ===================== -->
          <td
              align="right"
              valign="bottom"
              width="33.33%"
              style="text-align:end; padding: 0 0 0 20px;">

            <p class="website" style="text-align: start; height:20px;">
              <a href="https://ebenezerking.com"
                 style="font-size:16px; font-weight:500; color: #00ff91; text-decoration:underline; text-align: end;">
                ebenezerking.com
              </a>
            </p>
          </td>

        </tr>

        <!-- ===================== -->
        <!-- ===================== COPYRIGHT ROW ===================== -->
        <!-- ===================== -->
        <tr>
          <td colspan="3"
              align="center"
              width="100%"
              style="height: 28px; padding: 2px 0 18px;">

            <p
               style="margin:0; font-size:10px; font-weight:300; text-align:center;">
              © ${new Date().getFullYear()} Ebenezer King. All rights reserved.
            </p>

          </td>
        </tr>

      </table>
	<!-- INNER CONTAINER - DESKTOP - FOOTER - END -->
	<!-- ====================================== -->

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
