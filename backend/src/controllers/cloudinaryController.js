// =====================================
// CLOUDINARY CONTROLLER
// src/controllers/cloudinaryController.js
// =====================================
import { uploadImage } from "../services/cloudinaryService.js";

// =====================================
export const uploadController = async (req, res) => {
	try {
		const imageUrl = await uploadImage(req.file.path);

		res.json({
			success: true,
			url: imageUrl,
		});
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
};