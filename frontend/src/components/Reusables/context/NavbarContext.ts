// =====================================
// src/Components/Reusables/context/NavbarContext.ts
// =====================================
import { createContext, useContext } from "react";
import type { RefObject } from "react";

// =====================================
type NavbarContextType = {
	navbarRef: RefObject<HTMLElement | null>;
	navbarHeight: number;
};

// =====================================
export const NavbarContext = createContext<NavbarContextType | null>(null);

// =====================================
export function useNavbar() {
	const context = useContext(NavbarContext);

	if (!context) {
		throw new Error("useNavbar must be used inside NavbarProvider");
	}

	return context;
}
