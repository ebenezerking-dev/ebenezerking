// ===================================
// EMAIL BASE TEMPLATE
// src/email/templates/emailBase.js
// ===================================
export const emailBase = ({ header, body, footer, previewText = "" }) => {
	return `<!DOCTYPE html>
	<html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml">
	<head>
 	 <meta charset="UTF-8">
 	 <meta name="viewport" content="width=device-width, initial-scale=1.0">
 	 <meta http-equiv="X-UA-Compatible" content="IE=edge">
 	 <meta name="x-apple-disable-message-reformatting">
 	 <title>Email Template</title>
  
 	 <!-- ==================== STYLE START ==================== -->
  	<style>
  	/*  CLIENT-SAFE RESETS */
    body, table, td, p, a, div, span {
      margin: 0;
      padding: 0;
      border: 0;
      font-size: 100%;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
      line-height: 1.5;
    }
    
    body {
      height: 100% !important;
      width: 100% !important;
      background-color: #f5f5f5;
      margin: 0;
      padding: 0;
    }
    
  	/* EMAIL CONTAINER */
    .email-container {
      max-width: 600px;
      width: 100%;
      margin: 0 auto;
      background-color: #ffffff;
      border-radius: 16px;
      overflow: hidden;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
    }
    
  	/* RESPONSIVE IMAGES */
    img {
      border: 0;
      height: auto;
      line-height: 100%;
      outline: none;
      text-decoration: none;
      -ms-interpolation-mode: bicubic;
    }
    
    .img-responsive {
      max-width: 100%;
      height: auto;
      display: block;
    }
    
  	/* RESPONSIVE TABLES */
    .wrapper-table {
      width: 100%;
      table-layout: fixed;
    }

  	/* CLASS / MOBILE VIEW  */
	.mobile-footer {
  	display: none !important;
  	max-height: 0 !important;
  	overflow: hidden !important;
	background: red !important;
	}

  	/* CLASS / DESKTOP VIEW  */
	.desktop-footer {
	display: table !important;
	}
    
  	/* ================================= */
  	/* MEDIA QUERIES - 600px */
  	/* ================================= */
	@media only screen and (max-width: 600px) {
  	.email-container {
  	  width: 100% !important;
   	 border-radius: 0 !important;
 	 }

  	/* CLASS / MOBILE VIEW  */
	.mobile-footer {
    display: table !important;
    max-height: none !important;
  	}

  	/* CLASS / DESKTOP VIEW  */
	.desktop-footer {
    display: none !important;
    max-height: 0 !important;
    overflow: hidden !important;
  	}


  
  	/* CLASS / RESPONSIVE-TABLE  */
  	table[class="responsive-table"] {
    width: 100% !important;
 	}
  
  	/* CLASS / LOGO-IMG  */
 	img[class="logo-img"] {
    width: 140px !important;
    height: auto !important;
 	 }


	/* CLASS / FOOTER ROW STACK */
  	/* CLASS / FOOTER-ROW  */
  	/* TR */
 	 tr[class="footer-row"] {
    display: block !important;
    width: 100% !important;
 	 }
  
  	/* FOOTER COLUMN STACK MOBILE */
  	/* CLASS / FOOTER-COLUMN  */
  	/* TD */
 	 td[class="footer-column"] {
    display: block !important;
    width: 100% !important;
    text-align: center !important;
    padding: 9px 0 !important;
  	}
  

  
  	/* CLASS / FOOTER-ROW-DIV */
  	/* DIV */
  	div[class="footer-row-div"] {
    width: 200px !important;
	max-height: 70px !important;
 	 }

  	/* CLASS / DEV-LOGO */
  	/* DIV */
	 div[class="dev-logo"] {
 	 text-align: center !important;
 	 }

	/* CLASS / SOCIAL WRAPPER */
  	/* DIV */
  	div[class="social-wrapper"] {
    text-align: center !important;
 	 }
  
  	/* CLASS / DEV WEBSITE */
  	/* DIV */
  	div[class="dev-website"] {
    text-align: center !important;
  	}
  
  	/* CLASS / TITLE */
  	/* H3 */
  	h3[class="title"] {
    font-size: 24px !important;
	 }
  
  	/* CLASS / TEXT */
  	/* P */
  	p[class="text"] {
    font-size: 16px !important;
  	}
	}
    
  	/* ==================================== */
  	/* MEDIA QUERIES - 480px */
	/* CLASS / PADDING-SMALL */
  	/* ==================================== */
    @media only screen and (max-width: 480px) {
      td[class="padding-small"] {
        padding: 7px 0 !important;
      }
      
  	/* CLASS / SOCIAL-ICONS */
      img[class="social-icon"] {
        width: 20px !important;
        height: 20px !important;
      }

  	/* CLASS / WEBSITE */
  	/* P */
		p[class="website"] {
        font-size: 12px !important;
      }
      
  	/* CLASS / COPYRIGHT */
  	/* P */
      p[class="copyright"] {
        font-size: 5px !important;
        padding: 10px 0 !important;
		width: 100% !important;
      }
      
      .btn-text {
        font-size: 14px !important;
      }
    }
    
  	/* DARK MODE SUPPORT */
    @media (prefers-color-scheme: dark) {
      .email-container {
        background-color: #1a1a1a !important;
      }
      
      .dark-mode-text {
        color: #00ff91 !important;
      }
      
      .message-box {
        background: #2a2a2a !important;
        border-left-color: #00ff91 !important;
      }
    }
    
  	/* OUTLOOK SPECIFIC */
    .ExternalClass, .ReadMsgBody {
      width: 100%;
      background-color: #f5f5f5;
    }
    
  	/* BUTTON STYLES */
    .btn {
      display: inline-block;
      padding: 12px 24px;
      background-color: #00485d;
      color: #ffffff;
      text-decoration: none;
      border-radius: 8px;
      font-weight: 600;
      text-align: center;
    }
    
    .btn:hover {
      background-color: #006b88;
    }
  	</style>
 	 <!-- ==================== STYLE END ==================== -->
	</head>

	<body style="background-color: #f5f5f5; margin: 0; padding: 20px 0;">
  	<!--[if (gte mso 9)|(IE)]>
    <table width="600" align="center" cellpadding="0" cellspacing="0" border="0">
      <tr>
        <td>
 	 <![endif]-->
  
  	<!-- PREHEADER TEXT (for preview) -->
 	 <div style="display: none; font-size: 1px; color: #f5f5f5; line-height: 1px; max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden;">
    ${previewText}
 	 </div>
  
 	 <!-- MAIN EMAIL CONTAINER -->
  	<table width="100%" cellpadding="0" cellspacing="0" border="0" align="center" bgcolor="#f5f5f5">
   	 <tr>
      <td align="center" valign="top" style="padding: 20px 10px;">
        <table width="100%" max-width="600" cellpadding="0" cellspacing="0" border="0" align="center" class="email-container" style="max-width: 600px; width: 100%; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);">
          
          <!-- HEADER SECTION -->
          <tr>
            <td align="center" valign="top" style="padding: 0;">
              ${header}
            </td>
          </tr>
          
          <!-- BODY SECTION -->
          <tr>
            <td align="center" valign="top" class="padding" style="padding: 40px 30px;">
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td align="left" valign="top" style="color: #333333;">
                    ${body}
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
          <!-- FOOTER SECTION -->
          <tr>
            <td align="center" valign="top" style="padding: 0;">
              ${footer}
            </td>
          </tr>
          
        </table>
        
        <!-- POST-FOOTER (unsubscribe/address) -->
        <table width="100%" max-width="600" cellpadding="0" cellspacing="0" border="0" align="center" style="max-width: 600px; width: 100%; margin-top: 20px;">
          <tr>
            <td align="center" valign="top" style="padding: 20px 15px;">
              <p style="font-size: 12px; color: #CCCCCC; margin: 0;">
                You're receiving this email because you contacted Ebenezer King through the portfolio website.
              </p>
              <p style="font-size: 12px; color: #CCCCCC; margin: 10px 0 0 0;">
                Built with ❤️ for great communication
              </p>
            </td>
          </tr>
       	 </table>
     	</td>
    </tr>
  	</table>
  
	  <!--[if (gte mso 9)|(IE)]>
        </td>
      </tr>
   	 </table>
 	 <![endif]-->
	</body>
	</html>`;
};
