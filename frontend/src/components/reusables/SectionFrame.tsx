// =====================================
// src/pages/components/frames/sectionFrame.tsx
// ===================================== SECTION FRAME COMPONENT
import type { ReactNode } from "react";
import { motion } from "framer-motion";

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
		<motion.section
			id={id}
			initial={{ opacity: 0, y: 50 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{
				duration: 0.5,
				ease: [0.25, 0.1, 0.25, 1],
			}}
			viewport={{ amount: 0.2 }}
			className={`relative pt-[4rem] pb-[12rem] px-4 text-2xl md:text-2xl lg:text-xl overflow-hidden ${className}`}
		>
			{children}
		</motion.section>
	);
}
