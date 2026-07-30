// src/utils/visibilityHelpers.ts
// Helper functions for managing responsive visibility

// ================== IMPORTS
import type { Breakpoint } from "../hooks/useBreakpoint";

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

// ================== DEFAULT VISIBILITY
export const getDefaultVisibility = (): Required<VisibilityConfig> => ({
	mobile: true,
	tablet: true,
	desktop: true,
});

// ================== DEFAULT SCALE
export const getDefaultScale = (): Required<ScaleConfig> => ({
	mobile: 1,
	tablet: 1,
	desktop: 1,
});

// ================== VISIBILITY CLASSES
export const buildVisibilityClasses = (
	visibility: VisibilityConfig,
): string => {
	const vis = { ...getDefaultVisibility(), ...visibility };

	let classes = "";

	// Mobile
	classes += vis.mobile ? "block " : "hidden ";

	// Tablet
	if (vis.tablet === false) {
		classes += "sm:hidden ";
	} else if (vis.mobile === false) {
		classes += "sm:block ";
	}

	// Desktop
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
	breakpoint: Breakpoint,
): number => {
	const s = { ...getDefaultScale(), ...scale };

	switch (breakpoint) {
		case "mobile":
			return s.mobile;

		case "tablet":
			return s.tablet;

		case "desktop":
			return s.desktop;

		default:
			return 1;
	}
};

// ================== COUNT VISIBLE ON MOBILE
export const countVisibleOnMobile = (
	items: Array<{ mediaVisibility?: VisibilityConfig }>,
): number => {
	return items.filter((item) => item.mediaVisibility?.mobile !== false).length;
};

// ================== CHECK VISIBILITY AT BREAKPOINT
export const isVisibleAtBreakpoint = (
	visibility: VisibilityConfig,
	breakpoint: Breakpoint,
): boolean => {
	const vis = { ...getDefaultVisibility(), ...visibility };

	switch (breakpoint) {
		case "mobile":
			return vis.mobile !== false;

		case "tablet":
			return vis.tablet !== false;

		case "desktop":
			return vis.desktop !== false;

		default:
			return true;
	}
};

// ================== FILTER VISIBLE ITEMS AT BREAKPOINT
export const filterVisibleAtBreakpoint = <
	T extends { mediaVisibility?: VisibilityConfig },
>(
	items: T[],
	breakpoint: Breakpoint,
): T[] => {
	return items.filter((item) =>
		isVisibleAtBreakpoint(item.mediaVisibility || {}, breakpoint),
	);
};
