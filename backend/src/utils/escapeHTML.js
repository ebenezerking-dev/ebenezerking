// ===========================
// ESCAPE HTML
// src/utils/escapeHTML.js
// ===========================
export const escapeHTML = (text = "") => {
	return String(text)
		.replace(/&/g, "&amp;")
		.replace(/</g, "&lt;")
		.replace(/>/g, "&gt;")
		.replace(/"/g, "&quot;")
		.replace(/'/g, "&#039;");
};