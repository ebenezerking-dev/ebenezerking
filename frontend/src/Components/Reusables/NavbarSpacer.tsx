// =====================================
// src/Components/Reusables/NavbarSpacer.tsx
// =====================================
import { useNavbar } from "./context/NavbarContext";

// =====================================
interface NavbarSpacerProps {
	mobileOffset?: number;
	mdOffset?: number;
	lgOffset?: number;
}

// =====================================
function NavbarSpacer({
	mobileOffset = 0,
	mdOffset = 0,
	lgOffset = 0,
}: NavbarSpacerProps) {
	const { navbarHeight } = useNavbar();
	return (
		<div
			className="
				h-[var(--spacer)]
				md:h-[var(--spacer-md)]
				lg:h-[var(--spacer-lg)]
			"
			style={
				{
					"--spacer": `${navbarHeight + mobileOffset}px`,
					"--spacer-md": `${navbarHeight + mdOffset}px`,
					"--spacer-lg": `${navbarHeight + lgOffset}px`,
				} as React.CSSProperties
			}
		/>
	);
}

export default NavbarSpacer;
