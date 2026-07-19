// src/utils/visibilityHelpers.ts
// Helper functions for managing responsive visibility

// ================== TYPES
type VisibilityConfig = {
	mobile?: boolean;
	tablet?: boolean;
	desktop?: boolean;
};

type ScaleConfig = {
	mobile?: number;
	tablet?: number;
	desktop?: number;
};

// ================== HELPERS
// ================== DEFAULT VISIBILITY
export const getDefaultVisibility = () => ({
	mobile: true,
	tablet: true,
	desktop: true,
});

// ================== DEFAULT SCALE
export const getDefaultScale = () => ({
	mobile: 1,
	tablet: 1,
	desktop: 1,
});

// ================== VISIBILITY CLASSES
export const buildVisibilityClasses = (
	visibility: VisibilityConfig,
): string => {
	const defaultVis = getDefaultVisibility();
	const vis = { ...defaultVis, ...visibility };

	let classes = "";

	// Mobile
	if (vis.mobile === false) {
		classes += "hidden ";
	} else {
		classes += "block ";
	}

	// Tablet (sm: 640px and up)
	if (vis.tablet === false) {
		classes += "sm:hidden ";
	} else if (vis.mobile === false) {
		classes += "sm:block ";
	}

	// Desktop (lg: 1024px and up)
	if (vis.desktop === false) {
		classes += "lg:hidden ";
	} else if (vis.mobile === false || vis.tablet === false) {
		classes += "lg:block ";
	}

	return classes.trim();
};

// ================== SCALE FOR BREAKPOINT
export const getScaleForBreakpoint = (
	scale: ScaleConfig = {},
	breakpoint: "mobile" | "sm" | "lg",
): number => {
	const defaultScale = getDefaultScale();
	const s = { ...defaultScale, ...scale };

	switch (breakpoint) {
		case "mobile":
			return s.mobile ?? 1;
		case "sm":
			return s.tablet ?? 1;
		case "lg":
			return s.desktop ?? 1;
		default:
			return 1;
	}
};

// ================== Helper to count visible items on mobile
export const countVisibleOnMobile = (
	items: Array<{ mediaVisibility?: VisibilityConfig }>,
): number => {
	return items.filter((item) => item.mediaVisibility?.mobile !== false).length;
};

// ================== Helper to check if item is visible at breakpoint
export const isVisibleAtBreakpoint = (
	visibility: VisibilityConfig,
	breakpoint: "mobile" | "sm" | "lg",
): boolean => {
	const defaultVis = getDefaultVisibility();
	const vis = { ...defaultVis, ...visibility };

	switch (breakpoint) {
		case "mobile":
			return vis.mobile !== false;
		case "sm":
			return vis.tablet !== false;
		case "lg":
			return vis.desktop !== false;
		default:
			return true;
	}
};

// ================== Helper to filter visible items at breakpoint
export const filterVisibleAtBreakpoint = <
	T extends { mediaVisibility?: VisibilityConfig },
>(
	items: T[],
	breakpoint: "mobile" | "sm" | "lg",
): T[] => {
	return items.filter((item) =>
		isVisibleAtBreakpoint(item.mediaVisibility || {}, breakpoint),
	);
};
