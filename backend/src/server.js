// =====================================
// ENTRY POINT
// src/server.js
// =====================================
import app from "./app.js";
import connectDB from "./config/db.js";
import env from "./config/env.js"; 

// =====================================
const PORT = env.PORT;

// =====================================
const startServer = async () => {
	try {
		console.log("🔄 Starting server...");

		// CONNECT DATABASE
		await connectDB();

		// START EXPRESS SERVER
		app.listen(PORT, "0.0.0.0", () => {
			console.log(`🚀 Server running on port ${PORT}`);
			console.log(`🧠 Environment: ${env.NODE_ENV || "development"}`);
			console.log(`✅ CORS allowed origins:`, env.ALLOWED_ORIGINS);
		});

		console.log("ENV CHECK:", {
			PORT: env.PORT,
			MONGO: !!env.MONGO_URI,
			RESEND: !!env.RESEND_API_KEY,
		});
	} catch (error) {
		console.error("❌ Server failed to start:", error);
		process.exit(1);
	}
};

// SAFETY HANDLERS
process.on("uncaughtException", (err) => {
	console.error("UNCAUGHT:", err);
});

process.on("unhandledRejection", (err) => {
	console.error("UNHANDLED:", err);
});

startServer();
