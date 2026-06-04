// ===================================
// EMAIL BASE TEMPLATE
// src/email/templates/emailBase.js
// ===================================
export const emailBase = ({ header, body, footer }) => `
<!DOCTYPE html>
<html>
        <!---------------- HEAD ---------------->
<head>
  <meta charset="UTF-8" />
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1.0"
  />
        <!---------------- MEDIA QUERY STYLES ---------------->
  <style>
@media only screen and (max-width: 600px) {

  .footer-column {
    display: block !important;
    width: 100% !important;
    text-align: center !important;
  }

  .footer-logo {
    padding: 20px 0 !important;
  }

  .footer-social {
    padding: 15px 0 20px !important;
  }

  .footer-logo img {
    width: 130px !important;
    height: auto !important;
    margin: 0 auto !important;
  }

  .footer-social div {
    text-align: center !important;
  }

  .footer-social p {
    text-align: center !important;
  }
}
  </style>
</head>

        <!---------------- BODY & STYLES ---------------->
<body style="margin:0;padding:0;background:#f6f7fb;">
  <div
    style="
      font-family:Tinos,Arial,sans-serif;
      background:#f6f7fb;
      padding:20px;
    "
  >
    <div
      style="
        max-width:600px;
        margin:auto;
        background:#fff;
        border-radius:12px;
        overflow:hidden;
        box-shadow:0 10px 25px rgba(0,0,0,0.08);
      "
    >
      ${header}

      <div style="padding:25px;color:#22050c;">
        ${body}
      </div>

      ${footer}
    </div>
  </div>
</body>
</html>
`;
