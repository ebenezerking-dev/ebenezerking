// =====================================
// src/Components/Reusables/context/NavbarProvider.tsx
// =====================================
import { useLayoutEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import { NavbarContext } from "./NavbarContext";

export function NavbarProvider({ children }: { children: ReactNode }) {
	const navbarRef = useRef<HTMLElement | null>(null);
	const [navbarHeight, setNavbarHeight] = useState(0);

	useLayoutEffect(() => {
		const update = () => {
			if (!navbarRef.current) return;

			const height = navbarRef.current.getBoundingClientRect().height;

			setNavbarHeight(height);

			document.documentElement.style.setProperty(
				"--navbar-height",
				`${height}px`,
			);
		};

		update();

		window.addEventListener("resize", update);
		window.addEventListener("orientationchange", update);

		return () => {
			window.removeEventListener("resize", update);
			window.removeEventListener("orientationchange", update);
		};
	}, []);

	return (
		<NavbarContext.Provider value={{ navbarRef, navbarHeight }}>
			{children}
		</NavbarContext.Provider>
	);
}
