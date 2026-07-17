// src/components/reusables/others/BottomDivider.tsx
// A reusable glowing bottom divider for all sections

// ================== IMPORTS
import { motion } from "framer-motion";
import { bottomDivider, viewportOnce } from "../animations/shared";

// ================== PROPS
type BottomDividerProps = {
	className?: string;
};

// ================== BOTTOM DIVIDER
const BottomDivider = ({ className = "" }: BottomDividerProps) => {
	return (
		<motion.div
			variants={bottomDivider}
			initial="hidden"
			whileInView="visible"
			viewport={viewportOnce}
			className={`pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-1.5 bg-linear-to-r from-transparent via-orange-500 to-transparent ${className}`}
		/>
	);
};

export default BottomDivider;
