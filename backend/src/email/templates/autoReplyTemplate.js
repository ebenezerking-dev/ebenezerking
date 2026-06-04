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
		<img
			src="${EMAIL_ASSETS.header}"
			width="600"
			style="display:block;width:100%;max-width:600px;border:0;"
		/>
	`;

	const body = `
		<h3 style="font-size:20px;font-weight:700;margin:0 0 40px 0;">
  					🎉 Hi ${name} 🎉
		</h3>

		<div style="font-size:16px;margin:10px 0 0 0;">
				<p>
  					I’ve received your message and will get back to you shortly.
				</p>

				<p>
					In the meantime, feel free to check out my portfolio.
				</p>
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
      		  padding: 50px 25px;
     		 "
   		 >

     	 <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">

      		  <!---------------- ROW ONE ---------------->
       		 <tr>
      	 	   <!---------------- LOGO ---------------->
      	 	  <td align="left" valign="middle" style="width:50%;padding:20px 0 0 15px;">
       	     <img src="${EMAIL_ASSETS.logo}" width="170" style="display:block;border:0;" />
       		   </td>

      		    <!---------------- SOCIAL + WEBSITE ---------------->
       		   <td align="right" valign="middle" style="width:50%;padding:15px 15px 0 0;;">
        	    <div style="text-align:right;">

            	  <p style="margin:0 0 5px;">
            	    <a
             	     href="https://ebenezerking.com"
              	    style="color:#22050c;font-size:15px;font-weight:500;text-decoration:underline;"
            	    >
             	     ebenezerking.com
                </a>
              </p>

              ${socialIcons}

            </div>
          </td>
        </tr>

        <!---------------- ROW TWO COPYRIGHT ---------------->
        <tr>
          <td colspan="2" align="center" style="padding-top:5px;">
            <p style="margin:0;font-size:12px;font-weight:700;color:#00ff91;">
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
