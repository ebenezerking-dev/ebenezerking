// src/animations/mobileMenuVariants.ts

// ================== IMPORTS
import type { Variants } from "framer-motion";

// ===================================== BACKDROP VARIANTS
export const backdropVariants: Variants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: { duration: 0.2 },
	},
	exit: {
		opacity: 0,
		transition: { duration: 0.2 },
	},
};

// ===================================== MOBILE MENU VARIANTS
export const mobileMenuVariants: Variants = {
	hidden: {
		y: -20,
		opacity: 0,
		scale: 0.95,
	},
	visible: {
		y: 0,
		opacity: 1,
		scale: 1,
		transition: {
			type: "spring",
			stiffness: 300,
			damping: 25,
			staggerChildren: 0.05,
			delayChildren: 0.1,
		},
	},
	exit: {
		y: -20,
		opacity: 0,
		scale: 0.95,
		transition: {
			duration: 0.2,
			ease: "easeOut",
		},
	},
};

export const mobileMenuItemVariants: Variants = {
	hidden: {
		x: -20,
		opacity: 0,
	},
	visible: {
		x: 0,
		opacity: 1,
		transition: {
			duration: 0.3,
			ease: "easeOut",
		},
	},
};
