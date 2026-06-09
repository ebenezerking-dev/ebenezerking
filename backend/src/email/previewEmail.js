// ===================================
// EMAIL PREVIEW
// src/email/emailPreview.js
// ===================================
import fs from "fs";
import { adminTemplate } from "./templates/adminTemplate.js";
// import { autoReplyTemplate } from "./templates/autoReplyTemplate.js";

// ===================================
// Generate email HTML
// ===================================
const html = adminTemplate({
	name: "John Doe",
	email: "john@example.com",
	message: "Hello there!",
});

// const html = autoReplyTemplate({
// 	name: "John Doe",
// 	email: "john@example.com",
// 	message: "Hello there!",
// });

// ===================================
// MOBILE WRAPPER FUNCTION
// ===================================
const mobileFrame = (html) => `
<!DOCTYPE html>
<html>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body {
      margin: 0;
      background: #ddd;
      display: flex;
      justify-content: center;
      padding: 20px;
    }

    .phone {
      width: 600px;
      background: white;
      border-radius: 20px;
      overflow: hidden;
      box-shadow: 0 10px 30px rgba(0,0,0,0.2);
	  border: 2px solid red;
    }
  </style>
</head>
<body>
  <div class="phone">
    ${html}
  </div>
</body>
</html>
`;

// ===================================
// WRITE PREVIEW FILE
// ===================================
fs.writeFileSync("preview.html", mobileFrame(html));
console.log("Preview generated!");
//  open preview.html
