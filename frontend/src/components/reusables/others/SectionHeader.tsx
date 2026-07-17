// src/components/reusables/others/SectionHeader.tsx
// A reusable component that renders the section header for all careers

// ================== IMPORTS
import { motion } from "framer-motion";
import { header, headerUnderline, viewportRepeat } from "../animations/shared";

// ================== PROPS
type SectionHeaderProps = {
	title: string;
	className?: string;
};

// ================== SECTION HEADER
const SectionHeader = ({ title, className = "" }: SectionHeaderProps) => {
	return (
		<motion.div
			variants={header}
			initial="hidden"
			whileInView="visible"
			viewport={viewportRepeat}
			className={`header text-left px-4 mb-40 ${className}`}
		>
			<div className="inline-block uppercase font-unna font-bold text-[1rem] bg-[#000000] p-3 rounded-2xl">
				<h2 className="relative inline-block">
					{title}

					<motion.span
						variants={headerUnderline}
						initial="hidden"
						whileInView="visible"
						viewport={viewportRepeat}
						className="absolute left-1/2 -translate-x-1/2 bottom-[-0.2rem] h-[0.2rem] w-[30%] bg-orange-500 rounded-full"
					/>
				</h2>
			</div>
		</motion.div>
	);
};

export default SectionHeader;
