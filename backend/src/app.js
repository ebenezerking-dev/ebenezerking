// =====================================
// src/app.js
// ===================================== APP SETUP

import express from "express";
import cors from "cors";
import contactRoutes from "./routes/contactRoute.js";

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

		return callback(new Error("Not allowed by CORS"));
	},
	methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
	allowedHeaders: ["Content-Type", "Authorization"],
	credentials: true,
};

app.use(cors(corsOptions));

// ========================= MIDDLEWARE =========================
app.use(express.json());

// ========================= ROUTES =========================
app.use("/api/contact", contactRoutes);

// ========================= TEST ROUTE =========================
app.get("/", (req, res) => {
	res.send("API is running...");
});

export default app;
