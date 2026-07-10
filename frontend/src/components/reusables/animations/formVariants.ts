// src/animations/formVariants.ts

// ================== IMPORTS
import type { Variants } from "framer-motion";

// ===================================== FORM VARIANTS
export const formContainerVariants: Variants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.1,
			delayChildren: 0.2,
		},
	},
};

export const formFieldVariants: Variants = {
	hidden: { opacity: 0, x: -20 },
	visible: {
		opacity: 1,
		x: 0,
		transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] },
	},
};

export const formButtonVariants: Variants = {
	hidden: { opacity: 0, scale: 0.95 },
	visible: {
		opacity: 1,
		scale: 1,
		transition: { duration: 0.5, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] },
	},
};

export const toastVariants: Variants = {
	hidden: { opacity: 0, y: -20, scale: 0.95 },
	visible: {
		opacity: 1,
		y: 0,
		scale: 1,
		transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] },
	},
	exit: {
		opacity: 0,
		y: -20,
		scale: 0.95,
		transition: { duration: 0.2 },
	},
};

