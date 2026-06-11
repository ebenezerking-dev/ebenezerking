// =====================================
// src/animations/sectionAnimations.ts
// ===================================== SHARED ANIMATION VARIANTS
import type { Variants } from "framer-motion";

// ===================================== HELPER FUNCTION FOR VIEWPORT
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

// ===================================== HERO VARIANTS
export const mobileHeroVariants: Variants = {
	hidden: {
		opacity: 0,
		x: -300,
	},
	visible: {
		opacity: 1,
		x: 0,
		transition: {
			duration: 0.5,
			ease: [1.5, 0.5, 0.5, 0.5],
			delay: 0.5,
		},
	},
};

export const heroContainerVariants: Variants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.2,
			delayChildren: 0.1,
		},
	},
};

export const heroTitleVariants: Variants = {
	hidden: { opacity: 0, x: -100 },
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
