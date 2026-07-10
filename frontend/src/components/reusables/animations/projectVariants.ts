// src/animations/projectVariants.ts

// ================== IMPORTS
import type { Variants } from "framer-motion";

// ===================================== PROJECT CARD VARIANTS
export const projectCardVariants: Variants = {
	hidden: { opacity: 0, y: 50 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
	},
};

export const imageContainerVariants: Variants = {
	hidden: { opacity: 0, scale: 0.9 },
	visible: {
		opacity: 1,
		scale: 1,
		transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
	},
};

export const deviceImageVariants: Variants = {
	hidden: { opacity: 0, y: 30, scale: 0.8 },
	visible: {
		opacity: 1,
		y: 0,
		scale: 1,
		transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
	},
};

export const techTagVariants: Variants = {
	hidden: {
		opacity: 0,
		scale: 0.8,
		y: 10,
	},
	visible: {
		opacity: 1,
		scale: 1,
		y: 0,
		transition: {
			duration: 0.35,
			ease: [0.25, 0.1, 0.25, 1],
		},
	},
};

export const hrVariants: Variants = {
	hidden: { scaleX: 0, opacity: 0 },
	visible: {
		scaleX: 1,
		opacity: 1,
		transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
	},
};
