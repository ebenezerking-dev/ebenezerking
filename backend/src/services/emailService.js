// =====================================
// src/services/emailService.js
// ===================================== EMAIL SERVICE USING SENDGRID
import sgMail from "@sendgrid/mail";
import env from "../config/env.js";

sgMail.setApiKey(env.sendGridApiKey);

export const sendEmail = async ({ name, email, message }) => {
	try {
		await sgMail.send({
			to: env.sendGridRecipient,
			from: env.sendGridSender,
			subject: `New Contact Message from ${name}`,
			html: `
      		<table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#f4f6f8; padding:20px; font-family: Arial, sans-serif;">
        	<tr>
         	 <td align="center">
            <table width="100%" max-width="600" cellpadding="0" cellspacing="0" border="0" style="background-color:#ffffff; padding:30px; border-radius:12px; box-shadow:0 4px 15px rgba(0,0,0,0.1);">
              
              <!---------------------------------------------- GRADIENT HEADER -->
              <tr>
                <td align="center" style="background: linear-gradient(90deg, #f97316, #450693); border-radius:12px 12px 0 0; padding:20px 0;">
				     <!---------------------------------------------- HEADER -->
                  <h2 style="color:#dbcfff; margin:0; font-size:24px;">New Contact Form Submission</h2>
                </td>
              </tr>

              <!--------------------------------------------- BODY -->
			<tr>
  			<td style="padding:20px 0;">
    
    			<p style="margin:0; padding-bottom:10px; font-size:18px;">
      			<strong>Name:</strong> ${name}
   			 </p>

    			<p style="margin:0; padding-bottom:10px; font-size:18px;">
      			<strong>Email:</strong> ${email}
   			 </p>

   			 <p style="margin:0; padding-bottom:6px; font-size:18px;">
     			 <strong>Message:</strong>
    			</p>

    			<p style="margin:0; font-size:18px; line-height:1.5; border-left:4px solid #8e2de2; padding-left:12px;">
    			  ${message}
   			 </p>

  			</td>
			</tr>

              <!-------------------------------------------- CTA BUTTON -->
			<tr>
  			<td align="center" style="padding:20px 0;">
  			  <a href="mailto:${email}"
    			   style="
     			    background-color:#f97316;
       			  color:#450693;
     			    text-decoration:none;
     			    padding:12px 25px;
      			   border-radius:6px;
     			    display:inline-block;
     			    font-weight:bold;
     			    font-size:16px;
     			  ">
     			  Reply to Sender
   			 </a>
 			 </td>
			</tr>

              <!-------------------------------------------- FOOTER -->
              <tr>
                <td style="padding-top:20px; text-align:center;">
                  <hr style="border:0; border-top:1px solid #ddd; margin-bottom:10px;">
                  <p style="font-size:12px; font-weight:bold; margin:0;">
                    This message was sent from your portfolio kingv2's contact form.
                  </p>
                </td>
              </tr>

            </table>
         	 </td>
       		 </tr>
      		</table>
      		`,
		});

		console.log("✅ Styled email sent via SendGrid");
	} catch (error) {
		console.error("Email error (SendGrid):", error);
		throw error;
	}
};
