// =========================
// src/config/db.js
// =========================
import mongoose from "mongoose";
import env from "../config/env";
// =========================

// ========================= DATABASE CONNECTION =========================
const connectDB = async () => {
	try {
		if (!env.MONGO_URI) {
			console.warn("⚠️ MongoDB not connected (missing URI)");
			return;
		}

		await mongoose.connect(env.MONGO_URI);

		console.log("✅ MongoDB connected successfully");
	} catch (error) {
		console.error("❌ MongoDB connection failed:", error.message);
		process.exit(1);
	}
};

export default connectDB;
