// src/animations/heroVariants.ts

// ================== IMPORTS
import type { Variants } from "framer-motion";

// ===================================== HOME HERO PAGE VARIANTS
export const HomeHeroImageVariants: Variants = {
	hidden: {
		opacity: 0,
		y: 500,
		scale: 0.92,
		filter: "blur(50px)",
	},
	visible: {
		opacity: 1,
		y: 0,
		scale: 1,
		filter: "blur(0px)",
		transition: {
			duration: 0.9,
			ease: [0.25, 0.1, 0.25, 1],
		},
	},
};

export const homeHeroSpanOneVariants: Variants = {
	initial: {
		rotate: 0,
	},
	hover: {
		rotate: -180,
		transition: {
			duration: 0.6,
			ease: [0.25, 0.1, 0.25, 1],
		},
	},
};

// ===================================== HERO SECTION VARIANTS
export const heroTitleVariants: Variants = {
	hidden: { opacity: 0, y: -100 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.6,
			ease: [0.25, 0.1, 0.25, 1],
			delay: 0.3,
		},
	},
};

export const heroSubTitleVariants: Variants = {
	hidden: {
		opacity: 0,
		scale: 0,
	},
	visible: {
		opacity: 1,
		scale: 1,
		transition: {
			duration: 0.6,
			ease: [0.25, 0.1, 0.25, 1],
			delay: 0.8,
		},
	},
};

export const heroFullStackVariants: Variants = {
	hidden: { opacity: 0, x: -1000 },
	visible: {
		opacity: 1,
		x: 0,
		transition: {
			duration: 0.9,
			delay: 0.4,
			ease: [0.25, 0.1, 0.25, 1],
		},
	},
};

export const heroFitnessVariants: Variants = {
	hidden: { opacity: 0, x: -1000 },
	visible: {
		opacity: 1,
		x: 0,
		transition: {
			duration: 0.9,
			delay: 0.6,
			ease: [0.25, 0.1, 0.25, 1],
		},
	},
};

export const heroCustomerVariants: Variants = {
	hidden: { opacity: 0, x: -1000 },
	visible: {
		opacity: 1,
		x: 0,
		transition: {
			duration: 0.9,
			delay: 0.8,
			ease: [0.25, 0.1, 0.25, 1],
		},
	},
};

export const developerHeroImageVariants: Variants = {
	hidden: {
		opacity: 0,
		y: 100,
	},
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.8,
			ease: [0.25, 0.1, 0.25, 1],
		},
	},
};

export const heroDateVariants: Variants = {
	hidden: { opacity: 0, x: 100 },
	visible: {
		opacity: 1,
		x: 0,
		transition: {
			duration: 0.6,
			ease: [0.25, 0.1, 0.25, 1],
			delay: 0.6,
		},
	},
};
