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
		if (!navbarRef.current) return;

		const updateHeight = () => {
			setNavbarHeight(navbarRef.current?.offsetHeight || 0);
		};

		updateHeight();

		window.addEventListener("resize", updateHeight);

		return () => {
			window.removeEventListener("resize", updateHeight);
		};
	}, []);

	return (
		<NavbarContext.Provider
			value={{
				navbarRef,
				navbarHeight,
			}}
		>
			{children}
		</NavbarContext.Provider>
	);
}
