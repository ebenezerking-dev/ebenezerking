// =====================================
// APP SETUP
// src/app.js
// =====================================
import express from "express";
import cors from "cors";
import { randomBytes } from "crypto";
import corsOptions from "./config/cors.config.js";
import contactRoutes from "./routes/contactRoute.js";
import healthRoute from "./routes/healthRoute.js";
import cloudinaryRoutes from "./routes/cloudinaryRoute.js";

// =====================================
const app = express();

// =====================================
// CORS - Apply CORS middleware
app.use(cors(corsOptions));

// =====================================
// REQUEST ID MIDDLEWARE (Add this)
app.use((req, res, next) => {
	req.requestId = randomBytes(8).toString("hex");
	next();
});

// =====================================
// BODY PARSER
app.use(express.json());

// =====================================
// ROUTES
app.use("/api/contact", contactRoutes);
app.use("/api/health", healthRoute);
app.use("/api/upload", cloudinaryRoutes);

// =====================================
// PING ROUTE
app.get("/ping", (req, res) => {
	res.send("pong");
});

// =====================================
// ROOT ROUTE
app.get("/", (req, res) => {
	console.log("🏠 Root hit");
	res.send("API is running...");
});

// =====================================
// ERROR HANDLER
app.use((err, req, res, next) => {
	console.error(`🔥 [${req.requestId}] ERROR:`, err.message);

	res.status(500).json({
		success: false,
		message: "Internal server error",
		requestId: req.requestId,
	});
});

// =====================================
// 404 HANDLER
app.use((req, res) => {
	console.warn(`⚠️ [${req.requestId}] Route not found: ${req.url}`);

	res.status(404).json({
		success: false,
		message: "Route not found",
		requestId: req.requestId,
	});
});

export default app;
