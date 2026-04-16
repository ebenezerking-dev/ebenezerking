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

app.use(
	cors({
		origin: function (origin, callback) {
			if (!origin) return callback(null, true);

			if (allowedOrigins.includes(origin)) {
				callback(null, true);
			} else {
				callback(new Error("Not allowed by CORS"));
			}
		},
		methods: ["GET", "POST", "PUT", "DELETE"],
		credentials: true,
	}),
);

// ========================= MIDDLEWARE =========================
app.use(express.json());

// ========================= ROUTES =========================
app.use("/api/contact", contactRoutes);

// ========================= TEST ROUTE =========================
app.get("/", (req, res) => {
	res.send("API is running...");
});

export default app;
