// =====================================
// src/server.js
// ===================================== ENTRY POINT (SERVER BOOTSTRAP)

import app from "./app.js";
import connectDB from "./config/db.js";
import env from "./config/env.js";

// ===================================== PORT CONFIG
const PORT = env.PORT || 3000;

// ===================================== START SERVER
const startServer = async () => {
	try {
		if (connectDB) {
			await connectDB();
		}

		app.listen(PORT, "0.0.0.0", () => {
			console.log(`🚀 Server running on port ${PORT}`);
		});
	} catch (error) {
		console.error("❌ Server failed to start:", error.message);
		process.exit(1);
	}
};

startServer();
