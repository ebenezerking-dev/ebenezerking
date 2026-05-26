// =====================================
// src/Components/Reusables/MediaQueryHook.tsx
// =====================================

import { useState, useEffect } from "react";

// ===================================== MEDIA QUERY HOOK
export function useMediaQuery(minWidth: number) {
	const [matches, setMatches] = useState(() => window.innerWidth >= minWidth);

	useEffect(() => {
		const mediaQuery = window.matchMedia(`(min-width: ${minWidth}px)`);

		const handleChange = () => {
			setMatches(mediaQuery.matches);
		};

		mediaQuery.addEventListener("change", handleChange);

		return () => {
			mediaQuery.removeEventListener("change", handleChange);
		};
	}, [minWidth]);

	return matches;
}
