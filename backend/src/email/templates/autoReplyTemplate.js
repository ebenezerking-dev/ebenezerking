// ===================================
// AUTO REPLY TEMPLATE
// src/email/templates/autoReply.js
// ===================================
import { emailBase } from "./emailBase.js";
import { EMAIL_ASSETS } from "../../email/assets/emailAssets.js";
import { socialIcons } from "../components/socialIcons.js";

// ===================================
export const autoReplyTemplate = (name) => {
	const header = `
	<!-- AUTO REPLY HEADER -->
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
		<!-- AUTO REPLY BODY -->
   		 <div style="text-align: center;">
     	 <div style="display: inline-block; background: linear-gradient(135deg, #00485d 0%, #006b88 100%); width: 60px; height: 60px; border-radius: 50%; margin-bottom: 20px; display: flex; align-items: center; justify-content: center;">
     	   <span style="font-size: 32px;">🎉</span>
     	 </div>
      
         <!-- AUTO REPLY MESSAGE CONTENT -->
      	<h3 class="title" style="font-size: 28px; font-weight: 700; margin: 0 0 16px 0; color: #00485d; background: linear-gradient(135deg, #00485d, #00ff91); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">
        Hi ${name}! 👋
     	 </h3>
      
     	 <div class="message-box" style="background: #f8f9fa; padding: 25px; border-radius: 12px; margin: 20px 0;">
        <p class="text" style="font-size: 16px; margin: 0 0 15px 0; color: #333333;">
          I've received your message and will get back to you within 24 hours.
      	  </p>
        
        	<p class="text" style="font-size: 16px; margin: 0 0 20px 0; color: #333333;">
          	In the meantime, feel free to explore my work:
        	</p>
        
		<!-- AUTO REPLY ACTION BUTTONS -->
      	  <a href="https://ebenezerking.com" class="btn" style="display: inline-block; padding: 12px 30px; background-color: #00485d; color: #ffffff; text-decoration: none; border-radius: 8px; font-weight: 600;">
          View Portfolio →
        	</a>
      		</div>
      
        <!-- AUTO REPLY QUICK TIP -->
      	<div style="margin-top: 30px; padding: 20px; background: #f0f7fa; border-radius: 12px;">
       	 <p style="font-size: 14px; color: #666666; margin: 0;">
          💡 Quick tip: Check out my latest projects while you wait!
        </p>	
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
		previewText:
			"Thank you for reaching out! I'll respond to your message shortly.",
	});
};
