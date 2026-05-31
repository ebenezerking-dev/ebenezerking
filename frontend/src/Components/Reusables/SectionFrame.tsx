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
			initial={{ opacity: 0, y: 80 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5, ease: "easeOut" }}
			viewport={{ amount: 0.2 }}
			className={`relative pt-[2rem] pb-[16rem] px-4 overflow-hidden ${className}`}
		>
			{children}
		</motion.section>
	);
}
