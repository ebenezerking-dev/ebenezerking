// src/animations/sharedVariants.ts

// ================== IMPORTS
import type { Variants } from "framer-motion";

// ===================================== SECTION CONTAINER VARIANTS
export const sectionContainerVariants: Variants = {
	hidden: {
		opacity: 0,
	},
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.15,
			delayChildren: 0.2,
		},
	},
};

// ===================================== HEADER VARIANTS
export const headerVariants: Variants = {
	hidden: {
		opacity: 0,
		y: 15,
	},
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.5,
			ease: [0.25, 0.1, 0.25, 1],
		},
	},
};

// ===================================== UNDERLINE VARIANTS
export const underlineVariants: Variants = {
	hidden: {
		width: "0%",
		opacity: 0,
	},
	visible: {
		width: "30%",
		opacity: 1,
		transition: {
			duration: 0.6,
			delay: 0.3,
			ease: [0.25, 0.1, 0.25, 1],
		},
	},
};

// ===================================== DIVIDER VARIANTS
export const dividerVariants: Variants = {
	hidden: {
		opacity: 0,
		scaleX: 0,
	},
	visible: {
		opacity: 1,
		scaleX: 1,
		transition: {
			duration: 0.8,
			delay: 0.6,
			ease: [0.25, 0.1, 0.25, 1],
		},
	},
};

// ===================================== FADE-IN VARIANTS
export const fadeInUpVariants: Variants = {
	hidden: {
		opacity: 0,
		y: 30,
	},
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.6,
			ease: [0.25, 0.1, 0.25, 1],
		},
	},
};

export const fadeInLeftVariants: Variants = {
	hidden: {
		opacity: 0,
		x: -30,
	},
	visible: {
		opacity: 1,
		x: 0,
		transition: {
			duration: 0.6,
			ease: [0.25, 0.1, 0.25, 1],
		},
	},
};

export const fadeInRightVariants: Variants = {
	hidden: {
		opacity: 0,
		x: 30,
	},
	visible: {
		opacity: 1,
		x: 0,
		transition: {
			duration: 0.6,
			ease: [0.25, 0.1, 0.25, 1],
		},
	},
};

// ===================================== SCALE VARIANTS
export const scaleVariants: Variants = {
	hidden: {
		opacity: 0,
		scale: 0.95,
	},
	visible: {
		opacity: 1,
		scale: 1,
		transition: {
			duration: 0.5,
			ease: [0.25, 0.1, 0.25, 1],
		},
	},
};

// ===================================== HOVER UNDERLINE VARIANTS
export const hoverUnderlineVariants: Variants = {
	hidden: {
		width: 0,
		opacity: 0,
	},
	visible: {
		width: "100%",
		opacity: 1,
		transition: {
			duration: 0.4,
			ease: [0.25, 0.1, 0.25, 1],
		},
	},
};

// ===================================== CARD CONTAINER VARIANTS
export const cardContainerVariants = (staggerDelay = 0.1): Variants => ({
	hidden: {
		opacity: 0,
	},
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: staggerDelay,
			delayChildren: 0.2,
		},
	},
});

// ===================================== CARD ANIMATION TYPES
export type CardAnimation = "fadeUp" | "fadeLeft" | "scale";

// ===================================== CARD VARIANTS
// Returns a reusable entrance animation for cards.
export const getCardVariants = (
	animation: CardAnimation = "fadeUp",
): Variants => {
	switch (animation) {
		case "fadeLeft":
			return fadeInLeftVariants;

		case "scale":
			return scaleVariants;

		case "fadeUp":
		default:
			return fadeInUpVariants;
	}
};
