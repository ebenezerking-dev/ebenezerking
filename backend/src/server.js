// =====================================
// src/server.js
// ===================================== ENTRY POINT - SERVER SETUP
import app from "./app.js";
import connectDB from "./config/db.js";
import { gracefulShutdown } from "./utils/gracefulShutdown.js";
import env from "./config/env.js";

// ========================= CONSTANTS =========================
const PORT = env.PORT || 5000;

// ========================= START SERVER =========================
const startServer = async () => {
	try {
		if (typeof connectDB === "function") {
			await connectDB();
			console.log("✅ Database connected");
		}

		const server = app.listen(PORT, "0.0.0.0", () => {
			console.log(`🚀 Server running on port ${PORT}`);
		});

		gracefulShutdown(server);
	} catch (error) {
		console.error("❌ Failed to start server:", error.message);
		process.exit(1);
	}
};

startServer();
