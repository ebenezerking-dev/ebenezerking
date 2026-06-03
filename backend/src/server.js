// =====================================
// ENTRY POINT (FIXED)
// =====================================
import app from "./app.js";
import connectDB from "./config/db.js";
import env from "./config/env.js";

// =====================================
const PORT = process.env.PORT || 3000;

// =====================================
const startServer = async () => {
	try {
		console.log("🔄 Starting server...");

		await connectDB(); // ❌ remove condition, always await

		app.listen(PORT, "0.0.0.0", () => {
			console.log(`🚀 Server running on port ${PORT}`);
		});

		console.log("ENV CHECK:", {
			PORT: process.env.PORT,
			MONGO: !!process.env.MONGO_URI,
			RESEND: !!process.env.RESEND_API_KEY,
		});
	} catch (error) {
		console.error("❌ Server failed to start:", error);
		process.exit(1);
	}
	process.on("uncaughtException", (err) => {
		console.error("UNCUGHT:", err);
	});

	process.on("unhandledRejection", (err) => {
		console.error("UNHANDLED:", err);
	});
};

startServer();
