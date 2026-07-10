// src/animations/sectionAnimations.ts
// ================== IMPORTS
import type { Variants } from "framer-motion";

// ================== VIEWPORT VARIANT EXPORTS
export const viewportOnce = {
	once: true,
	amount: 0.2,
};

export const viewportRepeat = {
	once: false,
	amount: 0.2,
};

// ===================================== MOBILE MENU VARIANTS
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
	// hidden: {
	// 	opacity: 0,
	// },
	// visible: {
	// 	opacity: 1,
	// 	transition: {
	// 		duration: 0.8,
	// 		ease: [0.25, 0.1, 0.25, 1],
	// 	},
	// },

	// hidden: {
	// 	opacity: 0,
	// 	scale: 1.05,
	// },
	// visible: {
	// 	opacity: 1,
	// 	scale: 1,
	// 	transition: {
	// 		duration: 0.8,
	// 		ease: [0.25, 0.1, 0.25, 1],
	// 	},
	// },

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

// ===================================== CONTAINER VARIANTS
export const containerVariants: Variants = {
	hidden: { opacity: 0 },
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
	hidden: { opacity: 0, y: 15 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
	},
};

// ===================================== ITEM VARIANTS
export const itemVariants: Variants = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
	},
};

// ===================================== UNDERLINE VARIANTS
export const underlineVariants: Variants = {
	hidden: { width: "0%", opacity: 0 },
	visible: {
		width: "30%",
		opacity: 1,
		transition: { duration: 0.6, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] },
	},
};

// ===================================== DIVIDER VARIANTS
export const dividerVariants: Variants = {
	hidden: { opacity: 0, scaleX: 0 },
	visible: {
		opacity: 1,
		scaleX: 1,
		transition: { duration: 0.8, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] },
	},
};

// ===================================== FADE IN VARIANTS
export const fadeInUpVariants: Variants = {
	hidden: { opacity: 0, y: 30 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
	},
};

export const fadeInLeftVariants: Variants = {
	hidden: { opacity: 0, x: -30 },
	visible: {
		opacity: 1,
		x: 0,
		transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
	},
};

export const fadeInRightVariants: Variants = {
	hidden: { opacity: 0, x: 30 },
	visible: {
		opacity: 1,
		x: 0,
		transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
	},
};

// ===================================== SCALE VARIANTS
export const scaleVariants: Variants = {
	hidden: { opacity: 0, scale: 0.95 },
	visible: {
		opacity: 1,
		scale: 1,
		transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
	},
};

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
	hidden: { opacity: 0, scale: 0.8 },
	visible: {
		opacity: 1,
		scale: 1,
		transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] },
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
