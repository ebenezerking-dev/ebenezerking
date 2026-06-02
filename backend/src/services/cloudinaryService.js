// =====================================
// CLOUDINARY SERVICE
// src/services/cloudinaryService.js
// =====================================
import cloudinary from "../config/cloudinary.js";

// =====================================
export const uploadImage = async (filePath) => {
	try {
		const result = await cloudinary.uploader.upload(filePath, {
			folder: "portfolio/email",
		});

		return result.secure_url;
	} catch (error) {
		console.log("Cloudinary upload failed:", error);
		throw new Error("Image upload failed");
	}
};