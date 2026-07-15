
// src/components/reusables/others/MediaQueryHook.tsx
// ================== IMPORTS
import { useState, useEffect } from "react";

// ===================================== MEDIA QUERY HOOK
export function useMediaQuery(minWidth: number) {
	const getMatch = () =>
		typeof window !== "undefined" ? window.innerWidth >= minWidth : false;

	const [matches, setMatches] = useState(getMatch);

	useEffect(() => {
		const mediaQuery = window.matchMedia(`(min-width: ${minWidth}px)`);

		const handleChange = () => setMatches(mediaQuery.matches);

		handleChange();

		mediaQuery.addEventListener("change", handleChange);

		return () => mediaQuery.removeEventListener("change", handleChange);
	}, [minWidth]);

	return matches;
}
