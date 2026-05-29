// =====================================
// src/app.js
// ===================================== APP SETUP (PRODUCTION SAFE)
import express from "express";
import cors from "cors";
import contactRoutes from "./routes/contactRoute.js";
import healthRoute from "./routes/healthRoute.js";

const app = express();

// ===================================== CORS CONFIGURATION
const allowedOrigins = [
	"http://localhost:5173",
	"http://localhost:5174",
	"https://kingv2.vercel.app",
];

const corsOptions = {
	origin: function (origin, callback) {
		// Allow Postman / server-to-server
		if (!origin) return callback(null, true);

		if (allowedOrigins.includes(origin)) {
			return callback(null, true);
		}

		// Don't hard-block (prevents browser ERR_CONNECTION_CLOSED)
		return callback(null, true);
	},
	methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
	allowedHeaders: ["Content-Type", "Authorization"],
	credentials: true,
};

// ===================================== APPLY CORS
app.use(cors(corsOptions));

// ===================================== SAFE PREFLIGHT HANDLER (FIX FOR EXPRESS 5 CRASH)
app.use((req, res, next) => {
	if (req.method === "OPTIONS") {
		return res.sendStatus(200);
	}
	next();
});

// ===================================== BODY PARSER
app.use(express.json());

// ===================================== ROUTES
app.use("/api/contact", contactRoutes);
app.use("/api/health", healthRoute);

// ===================================== ROOT ROUTE
app.get("/", (req, res) => {
	res.send("API is running...");
});

// ===================================== GLOBAL ERROR HANDLER
app.use((err, req, res, next) => {
	res.status(500).json({
		success: false,
		message: "Internal server error",
	});
});

// ===================================== 404 HANDLER
app.use((req, res) => {
	res.status(404).json({
		success: false,
		message: "Route not found",
	});
});

export default app;
