// =====================================
// APP SETUP
// src/app.js
// =====================================
import express from "express";
import cors from "cors";
import contactRoutes from "./routes/contactRoute.js";
import healthRoute from "./routes/healthRoute.js";
import cloudinaryRoutes from "./routes/cloudinaryRoute.js";

const app = express();

// ===================================== REQUEST LOGGER (DEBUG ONLY)
app.use((req, res, next) => {
	const requestId = Math.random().toString(36).substring(2, 10);
	req.requestId = requestId;
	next();
});

// ===================================== CORS CONFIGURATION (FIXED)
const allowedOrigins = new Set(process.env.ALLOWED_ORIGINS?.split(",") || []);

const corsOptions = {
	origin: (origin, callback) => {
		// allow server-to-server / Postman
		if (!origin) return callback(null, true);

		if (allowedOrigins.has(origin)) {
			console.log("✅ CORS allowed:", origin);
			return callback(null, true);
		}

		console.warn("❌ CORS blocked:", origin);
		return callback(null, false);
	},

	methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
	allowedHeaders: ["Content-Type", "Authorization"],
	credentials: true,
};

// ===================================== APPLY CORS
app.use(cors(corsOptions));

// ===================================== PRE-FLIGHT SAFETY
app.use((req, res, next) => {
	if (req.method === "OPTIONS") {
		console.log("🟡 Preflight handled");
		return res.sendStatus(200);
	}
	next();
});

// ===================================== BODY PARSER
app.use(express.json());

// ===================================== ROUTES
app.use("/api/contact", contactRoutes);
app.use("/api/health", healthRoute);
app.use("/api/upload", cloudinaryRoutes);

// ===================================== PING ROUTE
app.get("/ping", (req, res) => {
	res.send("pong");
});

// ===================================== ROOT ROUTE
app.get("/", (req, res) => {
	console.log("🏠 Root hit");
	res.send("API is running...");
});

// ===================================== ERROR HANDLER
app.use((err, req, res, next) => {
	console.error(`🔥 [${req.requestId}] ERROR:`, err.message);

	res.status(500).json({
		success: false,
		message: "Internal server error",
		requestId: req.requestId,
	});
});

// ===================================== 404 HANDLER
app.use((req, res) => {
	console.warn(`⚠️ [${req.requestId}] Route not found: ${req.url}`);

	res.status(404).json({
		success: false,
		message: "Route not found",
		requestId: req.requestId,
	});
});

export default app;
