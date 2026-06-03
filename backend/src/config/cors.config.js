// ===============================
// CORS CONFIG
// src/config/cors.config.js
// ===============================
import env from "./env.js";

// ===============================
// CORS options with enhanced logging
// ===============================
const corsOptions = {
	origin: (origin, callback) => {
		// Allow requests with no origin (like mobile apps, Postman, server-to-server)
		if (!origin) {
			return callback(null, true);
		}

		// Check if origin is allowed
		const isAllowed = env.ALLOWED_ORIGINS.includes(origin);

		// Special handling for development
		const isDevelopment = env.NODE_ENV === "development";

		if (isAllowed || (isDevelopment && origin.includes("localhost"))) {
			console.log("✅ CORS allowed:", origin);
			return callback(null, true);
		}

		// Block and log unauthorized origin
		console.log("❌ CORS blocked:", origin);
		console.log("   Allowed origins:", env.ALLOWED_ORIGINS);
		return callback(new Error(`Origin ${origin} not allowed by CORS`), false);
	},

	methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
	credentials: true,
	allowedHeaders: ["Content-Type", "Authorization"],
	exposedHeaders: ["Content-Length", "X-Request-Id"],
	optionsSuccessStatus: 200,
	maxAge: 86400,
};

export default corsOptions;
