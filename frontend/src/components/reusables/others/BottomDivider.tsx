// src/components/reusables/others/BottomDivider.tsx
// A reusable glowing bottom divider for all sections

// ================== IMPORTS
import { motion } from "framer-motion";
import { bottomDivider, viewportOnce } from "../animations/shared";
import type { Theme } from "../../../types/career";

// ================== PROPS
type BottomDividerProps = {
	className?: string;
	theme: Theme;
};

// ================== BOTTOM DIVIDER
const BottomDivider = ({ className = "", theme }: BottomDividerProps) => {
	return (
		<motion.div
			variants={bottomDivider}
			initial="hidden"
			whileInView="visible"
			viewport={viewportOnce}
			className={`pointer-events-none absolute bottom-0 left-1/2 h-1.5 w-[80%] -translate-x-1/2 ${className}`}
			style={{
				background: `linear-gradient( to right, transparent, ${theme.underline}, transparent)`,
			}}
		/>
	);
};

export default BottomDivider;
