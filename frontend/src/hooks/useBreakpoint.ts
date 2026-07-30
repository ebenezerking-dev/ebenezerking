// ================== BREAKPOINT HOOK
// src/hooks/useBreakpoint.ts

// ================== IMPORTS
import { useEffect, useState } from "react";

// ================== BREAKPOINT TYPES
export type Breakpoint = "mobile" | "tablet" | "desktop";

const getBreakpoint = (): Breakpoint => {
	if (window.innerWidth >= 1024) return "desktop";
	if (window.innerWidth >= 640) return "tablet";
	return "mobile";
};

// ================== EXPORT USE BREAKPOINT
export default function useBreakpoint() {
	const [breakpoint, setBreakpoint] = useState<Breakpoint>(getBreakpoint);
	useEffect(() => {
		const handleResize = () => {
			setBreakpoint(getBreakpoint());
		};
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);
	return breakpoint;
}
