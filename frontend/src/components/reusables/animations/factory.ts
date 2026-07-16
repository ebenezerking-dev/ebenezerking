// src/animations/factory.ts
// Reusable animation builders used to create new animations throughout the application.

// ================== IMPORTS
import {
	type Transition,
	type Variants,
	type TargetAndTransition,
} from "framer-motion";

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

// ===================================== HOME CAREER SPAN CONTAINER
export const buildHomeSpanOneVariants: Variants = {
	initial: {
		rotate: 0,
	},
	hover: {
		rotate: -180,
		transition: buildTransition(),
	},
};

// ===================================== FADE
// ===================================== FADE & SCALE VARIANT OPTIONS
type AnimationOptions = {
	duration?: number;
	delay?: number;
};
type ContainerVariantOptions = AnimationOptions & {
	animateSelf?: boolean;
	x?: number;
	y?: number;
	delayChildren?: number;
	staggerChildren?: number;
};
// ===================================== GENERAL CONTAINER VARIANT
export const buildContainerVariant = ({
	animateSelf = false,
	x = 0,
	y = 0,
	duration = 0.6,
	delay = 0,
	delayChildren = 0.2,
	staggerChildren = 0.15,
}: ContainerVariantOptions = {}): Variants => ({
	hidden: {
		...(animateSelf && { opacity: 0 }),
		x,
		y,
	},
	visible: {
		...(animateSelf && { opacity: 1 }),
		x: 0,
		y: 0,
		transition: {
			...buildTransition(duration, delay),
			delayChildren,
			staggerChildren,
		},
	},
});
// ===================================== FADE VERTICAL
type FadeYVariantOptions = AnimationOptions & {
	y?: number;
};
export const buildFadeYVariant = ({
	y = 0,
	duration = 0.6,
	delay = 0,
}: FadeYVariantOptions = {}): Variants => ({
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
type FadeXVariantOptions = AnimationOptions & {
	x?: number;
};
export const buildFadeXVariant = ({
	x = 0,
	duration = 0.6,
	delay = 0,
}: FadeXVariantOptions = {}): Variants => ({
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
export const buildFadeInVariant = ({
	duration = 0.6,
	delay = 0.8,
}: AnimationOptions = {}): Variants => ({
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
// ===================================== SCALE
type ScaleVariantOptions = AnimationOptions & {
	scale?: number;
	scaleX?: number;
	scaleY?: number;
};
export const buildScaleVariant = ({
	scale = 0.95,
	scaleX,
	scaleY,
	duration = 0.6,
	delay = 0,
}: ScaleVariantOptions = {}): Variants => ({
	hidden: {
		opacity: 0,
		scale,
		...(scaleX !== undefined && { scaleX }),
		...(scaleY !== undefined && { scaleY }),
	},
	visible: {
		opacity: 1,
		y: 0,
		scale: 1,
		...(scaleX !== undefined && { scaleX: 1 }),
		...(scaleY !== undefined && { scaleY: 1 }),
		transition: buildTransition(duration, delay),
	},
});
// ===================================== INDEX FADE Y
export const buildIndexedFadeYVariant = ({
	y = 20,
	duration = 0.6,
	stepDelay = 0.06,
}: {
	y?: number;
	duration?: number;
	stepDelay?: number;
} = {}): Variants => ({
	hidden: {
		opacity: 0,
		y,
		scale: 0.95,
	},
	visible: (index: number) => ({
		opacity: 1,
		y: 0,
		scale: 1,
		transition: {
			duration,
			delay: index * stepDelay,
			ease: defaultEase,
		},
	}),
});
// ===================================== POP TOAST FOR CONTACT SECTION
export const buildPopToastVariants = ({
	delay = 0,
}: AnimationOptions = {}): Variants => {
	const hiddenState = {
		opacity: 0,
		y: -20,
		scale: 0.95,
	};
	return {
		hidden: hiddenState,
		visible: {
			opacity: 1,
			y: 0,
			scale: 1,
			transition: buildTransition(0.3, delay),
		},
		exit: {
			...hiddenState,
			transition: buildTransition(0.2, delay),
		},
	};
};
// =====================================
// =====================================

// ===================================== HOMEPAGE DEVELOPER IMAGE VARIANTS
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

// ===================================== HEADER UNDERLINE DECORATION VARIANT
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
// ===================================== DIVIDER
export const buildScaleXVariant = (duration = 0.8, delay = 0.6): Variants => ({
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

// ===================================== CARD HOVER
export const buildCardHover = {
	y: -5,
	scale: 1.02,
	transition: buildTransition(0.2),
};

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
