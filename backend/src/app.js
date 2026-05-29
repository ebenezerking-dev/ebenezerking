// =====================================
// src/app.js
// ===================================== APP SETUP
import express from "express";
import cors from "cors";
import contactRoutes from "./routes/contactRoute.js";
import healthRoute from "./routes/healthRoute.js";

const app = express();

// ========================= GLOBAL REQUEST LOGGER (DEBUG) =========================
app.use((req, res, next) => {
	console.log(`➡️ Incoming Request: ${req.method} ${req.url}`);
	next();
});

// ========================= CORS =========================
const allowedOrigins = [
	"http://localhost:5173",
	"http://localhost:5174",
	"https://kingv2.vercel.app",
];

const corsOptions = {
	origin: function (origin, callback) {
		if (!origin) {
			console.log("⚠️ No origin (mobile/postman/server request)");
			return callback(null, true);
		}

		if (allowedOrigins.includes(origin)) {
			console.log("✅ Allowed origin:", origin);
			return callback(null, true);
		}

		console.warn("❌ Blocked by CORS:", origin);

		// IMPORTANT: do NOT throw error (prevents connection close issues)
		return callback(null, false);
	},
	methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
	allowedHeaders: ["Content-Type", "Authorization"],
	credentials: true,
};

app.use(cors(corsOptions));

// ========================= MIDDLEWARE =========================
app.use(express.json());

// ========================= ROUTE MOUNT LOGS (DEBUG) =========================
console.log("📦 Mounting /api/contact routes...");
app.use("/api/contact", contactRoutes);

console.log("📦 Mounting /api/health routes...");
app.use("/api/health", healthRoute);

// ========================= TEST ROUTE =========================
app.get("/", (req, res) => {
	console.log("🏠 Root route hit");
	res.send("API is running...");
});

// ========================= GLOBAL ERROR HANDLER =========================
app.use((err, req, res, next) => {
	console.error("🔥 Server Error Caught:", {
		message: err.message,
		stack: err.stack,
	});

	res.status(500).json({
		success: false,
		message: "Internal server error",
	});
});

// ========================= 404 LOGGER =========================
app.use((req, res) => {
	console.warn("⚠️ Route not found:", req.method, req.url);

	res.status(404).json({
		success: false,
		message: "Route not found",
	});
});

export default app;
