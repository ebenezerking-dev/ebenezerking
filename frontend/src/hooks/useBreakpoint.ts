// BREAKPOINT SYSTEM
// src/hooks/useBreakpoint.ts

// ================== IMPORTS
import { useEffect, useState } from "react";

// ================== BREAKPOINT TYPES
type Breakpoint = "mobile" | "sm" | "lg";

const getBreakpoint = (): Breakpoint => {
	if (window.innerWidth >= 1024) return "lg";
	if (window.innerWidth >= 640) return "sm";
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
