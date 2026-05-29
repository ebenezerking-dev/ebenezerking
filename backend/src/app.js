// =====================================
// src/app.js
// ===================================== APP SETUP
import express from "express";
import cors from "cors";
import contactRoutes from "./routes/contactRoute.js";
import healthRoute from "./routes/healthRoute.js";

const app = express();

// ========================= CORS =========================
const allowedOrigins = [
	"http://localhost:5173",
	"http://localhost:5174",
	"https://kingv2.vercel.app",
];

const corsOptions = {
	origin: function (origin, callback) {
		if (!origin) return callback(null, true);
		if (allowedOrigins.includes(origin)) {
			return callback(null, true);
		}
		console.warn("Blocked by CORS:", origin);
		return callback(null, false);
	},
	methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
	allowedHeaders: ["Content-Type", "Authorization"],
	credentials: true,
};

app.use(cors(corsOptions));

// ========================= MIDDLEWARE =========================
app.use(express.json());

// =========================  CONTACT ROUTE =========================
app.use("/api/contact", contactRoutes);

// ========================= HEALTH ROUTE =========================
app.use("/api/health", healthRoute);

// ========================= TEST ROUTE =========================
app.get("/", (req, res) => {
	res.send("API is running...");
});

// ========================= --- =========================
app.use((err, req, res, next) => {
	console.error("Server Error:", err);

	res.status(500).json({
		success: false,
		message: "Internal server error",
	});
});

export default app;
