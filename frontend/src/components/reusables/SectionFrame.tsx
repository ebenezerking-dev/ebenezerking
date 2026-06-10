// =====================================
// src/pages/components/frames/sectionFrame.tsx
// ===================================== SECTION FRAME COMPONENT
import type { ReactNode } from "react";

// ===================================== DATA
type SectionFrameProps = {
	id?: string;
	children: ReactNode;
	className?: string;
};

// ===================================== FUNCTION
export default function SectionFrame({
	id,
	children,
	className = "",
}: SectionFrameProps) {
	return (
		<section
			id={id}
			className={`relative bg-[linear-gradient(135deg,#020617,#000AFD,#020617)] pt-[4rem] pb-[1rem] px-4 text-2xl md:text-2xl lg:text-xl overflow-hidden ${className}`}
		>
			{children}
		</section>
	);
}
