// ===================================
// EMAIL PREVIEW
// src/email/emailPreview.js
// ===================================
import fs from "fs";
import { adminTemplate } from "./templates/adminTemplate.js";

// ===================================
const html = adminTemplate({
	name: "John Doe",
	email: "john@example.com",
	message: "Hello there!",
});

fs.writeFileSync("preview.html", html);

console.log("Preview generated!");

// node src/email/previewEmail.js
