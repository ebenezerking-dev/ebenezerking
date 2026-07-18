// src/pages/components/sections/frames/shared/CareerSectionFrame.tsx
// ================== IMPORTS
import type { ReactNode } from "react";
import type { Theme } from "../../../../types/career";

// ================== PROPS
type CareerSectionFrameProps = {
	id?: string;
	children: ReactNode;
	className?: string;
	theme: Theme;
};

// ================== SECTION FRAME COMPONENT
export default function CareerSectionFrame({
	id,
	children,
	className = "",
	theme,
}: CareerSectionFrameProps) {
	return (
		<section
			id={id}
			style={{
				background: `linear-gradient(
            ${theme.gradientAngle},
            ${theme.gradientFrom},
            ${theme.gradientVia},
            ${theme.gradientTo}
        )`,
			}}
			className={`relative pt-16 pb-4 px-4 text-lg overflow-hidden ${className}`}
		>
			{children}
		</section>
	);
}
