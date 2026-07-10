// src/animations/footerVariants.ts

// ================== IMPORTS
import type { Variants } from "framer-motion";

// ===================================== FOOTER VARIANTS
export const leftFooterVariants: Variants = {
	hidden: {
		opacity: 0,
		x: -100,
	},

	visible: {
		opacity: 1,
		x: 0,
		transition: {
			duration: 0.6,
			ease: [0.25, 0.1, 0.25, 1],
			delay: 0.3,
		},
	},
};

export const rightFooterVariants: Variants = {
	hidden: {
		opacity: 0,
		x: 100,
	},

	visible: {
		opacity: 1,
		x: 0,
		transition: {
			duration: 0.6,
			ease: [0.25, 0.1, 0.25, 1],
			delay: 0.3,
		},
	},
};

export const centerFooterVariants: Variants = {
	hidden: {
		opacity: 0,
		y: 100,
	},

	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.9,
			ease: [0.25, 0.1, 0.25, 1],
			delay: 0.3,
		},
	},
};
