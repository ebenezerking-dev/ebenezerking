// ===================================
// EMAIL BASE TEMPLATE
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
	/* =========================================
   CLIENT-SAFE RESETS
	========================================= */
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

	/* =========================================
   BASE LAYOUT CLASSES
	========================================= */
	.responsive-table {
    width: 100% !important;
    }

	/* =========================================
   RESPONSIVE IMAGES
	========================================= */
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

	/* =========================================
  	 EMAIL OUTLOOK
	========================================= */
	.ExternalClass, .ReadMsgBody {
  	width: 100%;
  	background-color: #000000;
	}

	.btn:hover {
  	background-color: #006b88;
	}

	/* =========================================
   MEDIA QUERY 600px
	========================================= */
	@media only screen and (max-width: 600px) {

	td.table-body {
  	background-color: #00485d !important;
	}

  	.email-container {
    width: 100% !important;
    border-radius: 0 !important;
  	}

  	.responsive-table {
    width: 100% !important;
  	}

  	.footer-row {
    display: block !important;
    width: 100% !important;
  	}


	.social-icon {
    width: 15px !important;
    height: 15px !important;
    padding: 0 !important;
	}

  	.title {
    font-size: 24px !important;
  	}

  	.text {
    font-size: 16px !important;
 	}

	.body-padding {
    padding: 40px 10px !important;
  	}

	.body-container {
	background-color: #00485d !important;
	}

	.mobile-btn {
  	display: block !important;
  	width: fit-content !important;
  	margin: 6px auto !important;
	background-color: #000000 !important;
	color: #00ff91 !important;
  	}

	.social-item {
  	margin-left: 5px !important;
	}

	.message-box {
	background-color: #000000 !important;
	color: #00ff91 !important;
	}

  	.logo-mobile {
    width: 110px !important;
    max-width: 110px !important;
  	}

  	.email-container {
    background-color: #000000 !important;
  	}

  	.light-mode-text {
    color: #000000 !important;
 	 }
	}

	</style>
 	 <!-- ==================== STYLE END ==================== -->
	</head>

 	 <!-- ==================== EMAIL TEMPLATE STRUCTURE ==================== -->
 	 <!-- ==================== MAIN BODY START ==================== -->
	<body style="background-color: #f5f5f5; margin: 0; padding: 20px 0;">
  	<!--[if (gte mso 9)|(IE)]>
    <table width="100%" align="center" cellpadding="0" cellspacing="0" border="0">
      <tr>
        <td>
 	 <![endif]-->
  
  	<!-- ==================== PREHEADER PREVIEW TEXT ==================== -->
 	 <div style="display:none; max-height:0; overflow:hidden; opacity:0;">
    			${previewText}
 	 </div>
  
 	<!-- ==================== MAIN EMAIL CONTAINER ==================== -->
  	<table width="100%" cellpadding="0" cellspacing="0" border="0" align="center" style="background-color: #f5f5f5; min-width: 320px;">
   	<tr>
      		<td 
				align="center" valign="top" style="padding: 20px 10px;">
    <table class="body-container" width="100%" cellpadding="0" cellspacing="0" border="0" 
				align="center" style="max-width: 600px; width: 100%; background-color: #00485d; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);">
          
    <!-- ==================== HEADER SECTION ==================== -->
    <tr>
            <td align="center" valign="top" style="background-color: #000000; color: #00ff91; padding: 0;">
              ${header}
            </td>
          </tr>
          
          <!-- ==================== BODY SECTION ==================== -->
          <tr>
            <td class="body-padding" align="center" valign="top"  style="background-color: #00485d; padding: 40px 15px;">
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td class="table-body" align="left" valign="top" style="background-color: #00485d; color: #00ff91;">
                    ${body}
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
          <!-- ==================== FOOTER SECTION ==================== -->
          <tr>
            <td align="center" valign="top" style="background-color: #000000; color: #00ff91; padding: 0;">
              ${footer}
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
