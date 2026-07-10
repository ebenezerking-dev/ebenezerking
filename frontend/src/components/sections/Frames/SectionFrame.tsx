// src/pages/components/sections/Frames/SectionFrame.tsx
// ================== IMPORTS
import type { ReactNode } from "react";
import type { Theme } from "../../../types/career";

// ================== PROPS
type SectionFrameProps = {
	id?: string;
	children: ReactNode;
	className?: string;
	theme: Theme;
};

// ================== SECTION FRAME COMPONENT
export default function SectionFrame({
	id,
	children,
	className = "",
	theme,
}: SectionFrameProps) {
	return (
		<section
			id={id}
			style={{
				background: `linear-gradient(
            135deg,
            ${theme.gradientFrom},
            ${theme.gradientVia},
            ${theme.gradientTo}
        )`,
			}}
			className={`relative pt-16 pb-4 px-4 text-2xl md:text-2xl lg:text-xl overflow-hidden ${className}`}
		>
			{children}
		</section>
	);
}
