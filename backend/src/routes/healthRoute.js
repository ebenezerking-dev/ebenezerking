// =====================================
// HEALTH ROUTE
// src/routes/healthRoute.js
// =====================================
import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
	res.status(200).json({
		status: "ok",
		uptime: process.uptime(),
	});
});

export default router;
