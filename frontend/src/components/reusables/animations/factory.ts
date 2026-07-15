// src/animations/factory.ts
// Reusable animation builders used to create new animations throughout the application.

// ================== IMPORTS
import type { Transition, Variants, TargetAndTransition } from "framer-motion";

// ===================================== DEFAULT EASING
// ===================================== Role: transition ease
export const defaultEase = [0.25, 0.1, 0.25, 1] as const;

// ===================================== DEFAULT TRANSITION
// ===================================== Role: transition duration
export const buildTransition = (duration = 0.6, delay = 0): Transition => ({
	duration,
	delay,
	ease: defaultEase,
});

// =====================================
// ===================================== HOME CAREER SPAN CONTAINER
// ===================================== Role: homepage career span
export const buildHomeSpanOneVariants = {
	initial: {
		rotate: 0,
	},
	hover: {
		rotate: -180,
		transition: buildTransition(),
	},
};

// ===================================== FADE VERTICAL
// ===================================== Role: fade up animation
export const buildFadeYVariant = (
	y = 0,
	duration = 0.6,
	delay = 0.3,
): Variants => ({
	hidden: {
		opacity: 0,
		y,
	},
	visible: {
		opacity: 1,
		y: 0,
		transition: buildTransition(duration, delay),
	},
});

// ===================================== FADE HORIZONTAL
// ===================================== Role: fade left animation
export const buildFadeXVariant = ({
	x = 0,
	duration = 0.6,
	delay = 0,
}: {
	x?: number;
	duration?: number;
	delay?: number;
} = {}): Variants => ({
	hidden: {
		opacity: 0,
		x,
	},
	visible: {
		opacity: 1,
		x: 0,
		transition: buildTransition(duration, delay),
	},
});

// ===================================== FADE OUT
// ===================================== Role: fade out animation
export const buildFadeOutVariant = (duration = 0.6, delay = 0.8): Variants => ({
	hidden: {
		opacity: 0,
		scale: 0,
	},
	visible: {
		opacity: 1,
		scale: 1,
		transition: buildTransition(duration, delay),
	},
});

// ===================================== HOMEPAGE HERO VARIANTS
export const buildHomepageDeveloperImageVariants: Variants = {
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
		transition: buildTransition(0.9, 0.3),
	},
};
// ===================================== HOME
// =====================================

// ===================================== SECTIONS CONTAINER
// ===================================== Role: for every section container
export const buildContainerVariant = (
	animateSelf: boolean,
	delayChildren = 0.2,
	staggerChildren = 0.15,
): Variants => ({
	hidden: animateSelf ? { opacity: 0 } : {},
	visible: {
		...(animateSelf && { opacity: 1 }),
		transition: {
			delayChildren,
			staggerChildren,
		},
	},
});

// ===================================== HEADER VARIANT
// ===================================== Role: for every section header
export const buildHeaderVariant = (y = 15): Variants => ({
	hidden: {
		opacity: 0,
		y,
	},
	visible: {
		opacity: 1,
		y: 0,
		transition: buildTransition(),
	},
});

// ===================================== HEADER UNDERLINE DECORATION VARIANT
// ===================================== Role: underline decoration
export const buildUnderlineVariant = (
	width = "30%",
	delay = 0.3,
): Variants => ({
	hidden: {
		width: "0%",
		opacity: 0,
	},
	visible: {
		width,
		opacity: 1,
		transition: buildTransition(0.6, delay),
	},
});

// ===================================== DEVICE IMAGE
// ===================================== Role: the project device image
export const buildDeviceImageVariant = (y = 40, scale = 0.82): Variants => ({
	hidden: {
		opacity: 0,
		y,
		scale,
	},
	visible: {
		opacity: 1,
		y: 0,
		scale: 1,
		transition: buildTransition(),
	},
});

// ===================================== GRID CARD
// ===================================== GRID ROW STAGGER CONTAINER VARIANT
// ===================================== Animate the row while staggering one after another.
export const buildRowStaggerVariant = (
	y = 10,
	duration = 0.3,
	staggerChildren = 0.1,
): Variants => ({
	hidden: {
		opacity: 0,
		y,
	},
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration,
			ease: defaultEase,
			staggerChildren,
		},
	},
});

// ===================================== ITEM VISIBLE VARIANT
// ===================================== Role: Individual skill card animation.
export const buildItemVisibleVariant = (y = 10, duration = 0.1): Variants => ({
	hidden: {
		opacity: 0,
		y,
	},
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration,
			ease: defaultEase,
		},
	},
});

// ===================================== ITEM EXIT VARIANT
// ===================================== Role: Used when AnimatePresence removes an item.
export const buildItemExitVariant = (duration = 0.2): TargetAndTransition => ({
	opacity: 0,
	scale: 0.9,
	transition: {
		duration,
	},
});

// ===================================== FADE EXIT
// ===================================== Role: fade exit for the dom animation
export const buildFadeExit = (duration = 0.2): TargetAndTransition => ({
	opacity: 0,
	transition: {
		duration,
	},
});

// ===================================== SCALE
// ===================================== Role: scale animation
export const buildScaleVariant = (
	scale = 0.95,
	duration = 0.5,
	delay = 0,
): Variants => ({
	hidden: {
		opacity: 0,
		scale,
	},
	visible: {
		opacity: 1,
		scale: 1,
		transition: buildTransition(duration, delay),
	},
});

// ===================================== POP
// ===================================== Role: pop animation
export const buildPopVariant = (
	scale = 0.8,
	duration = 0.45,
	delay = 0,
): Variants => ({
	hidden: {
		opacity: 0,
		scale,
	},
	visible: {
		opacity: 1,
		scale: 1,
		transition: buildTransition(duration, delay),
	},
});

// ===================================== POP UP
// ===================================== Role: pop up animation
export const buildPopUpVariant = (
	y = 10,
	scale = 0.8,
	duration = 0.35,
	delay = 0,
): Variants => ({
	hidden: {
		opacity: 0,
		y,
		scale,
	},
	visible: {
		opacity: 1,
		y: 0,
		scale: 1,
		transition: buildTransition(duration, delay),
	},
});

// ===================================== ANIMATION TYPES
export type CardAnimation = "fadeY" | "fadeX" | "scale" | "pop";

// ===================================== VARIANTS
export const getCardVariants = (
	animation: CardAnimation = "fadeY",
): Variants => {
	switch (animation) {
		case "fadeX":
			return buildFadeXVariant();
		case "scale":
			return buildScaleVariant();
		case "pop":
			return buildPopVariant();
		default:
			return buildFadeYVariant();
	}
};

// ===================================== POP TOAST
// ===================================== Role: for contact section message
export const buildPopToastVariant = (
	y = 20,
	scale = 0.95,
	duration = 0.3,
	delay = 0,
): Variants => ({
	hidden: {
		opacity: 0,
		y,
		scale,
	},
	visible: {
		opacity: 1,
		y: 0,
		scale: 1,
		transition: buildTransition(duration, delay),
	},
});

// ===================================== DIVIDER
export const buildDividerVariant = (duration = 0.8, delay = 0.6): Variants => ({
	hidden: {
		scaleX: 0,
		opacity: 0,
	},
	visible: {
		scaleX: 1,
		opacity: 1,
		transition: buildTransition(duration, delay),
	},
});
