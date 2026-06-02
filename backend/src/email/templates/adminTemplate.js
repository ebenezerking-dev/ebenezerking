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
        <!-- BACKGROUND IMAGE HEADER -->
		<img
			src="${EMAIL_ASSETS.header}"
			width="600"
			style="display:block;width:100%;max-width:600px;"
		/>
	`;

	const body = `
        <!-- NAME -->
		<p style="font-size:16px;font-weight:700;margin-bottom:8px;color:#00485d;">
 					 Name:
 					 <span style="color:#000000;font-weight:600;">${name}</span>
		</p>

        <!-- EMAIL -->
		<p style="font-size:16px;font-weight:700;margin-bottom:8px;color:#00485d;">
 					 Email:
 					 <span style="color:#000000;font-weight:600;">${email}</span>
		</p>

		<hr style="margin:15px 0;" />

        <!-- MESSAGE -->
		<div style="background:#f3f3f3;padding:25px 15px;border-left:4px solid #00485d;border-radius:6px;min-height:120px;font-size:15px;line-height:1.6;">
  					<p style="font-size:16px;font-weight:700;color:#00485d;margin:0 0 8px;">
    				<span>Message:</span>
  					</p>
  					${message}
		</div>
	`;

	const footer = `
			<table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
  			<tr>
  			  <td
  			    background="${EMAIL_ASSETS.footer}"
    			  style="
    			    background-image:url('${EMAIL_ASSETS.footer}');
    			    background-size:cover;
    			    background-position:center;
       			 padding:25px;
    		  " >

      		<table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">

        	<!-- ROW 1 -->
        	<tr>

          <!-- LOGO -->
          <td align="left" valign="middle" style="width:50%; padding:10px;">
          		<img src="${EMAIL_ASSETS.logo}" width="120" style="display:block;border:0;" />
          </td>

          <!-- SOCIAL + WEBSITE -->
          <td align="right" valign="middle" style="width:50%; padding:10px;">
            <div style="text-align:right;">
              ${socialIcons}

              <p style="margin:8px 0 0;">
                <a
                  href="https://ebenezerking.com"
                  style="color:#00485d;font-size:15px;font-weight:700;text-decoration:underline;"
                >
                  ebenezerking.com
                </a>
              </p>
            </div>
          </td>

        	</tr>

       		 <!-- COPYRIGHT -->
        		<tr>
         			 <td colspan="2" align="center" style="padding-top:15px;">
          		 	 <p style="margin:0;font-size:12px;font-weight:500;color:#00485d;">
           		 	  © ${new Date().getFullYear()} Ebenezer King
         			   </p>
        			  </td>
       				 </tr>

      				</table>

   				 </td>
 			 </tr>
		</table>
		`;

	return emailBase({ header, body, footer });
};
