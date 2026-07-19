// src/components/reusables/others/SectionSubtitle.tsx
// A reusable component that renders the section subtitle for all careers

// ================== IMPORTS
import { motion } from "framer-motion";
import type { Theme } from "../../../types/career";
import { paragraphUp, bodyUnderline, viewportRepeat } from "../animations";

// ================== PROPS
type SectionSubtitleProps = {
	title: string;
	theme: Theme;
	className?: string;
};

// ================== SECTION SUBTITLE
const SectionSubtitle = ({
	title,
	theme,
	className = "",
}: SectionSubtitleProps) => {
	return (
		<motion.div
			variants={paragraphUp}
			initial="hidden"
			whileInView="visible"
			viewport={viewportRepeat}
			className={`flex justify-center mt-5 ${className}`}
		>
			<div className="relative z-10 inline-flex bg-[#000000] px-3 pt-1 pb-3 rounded-2xl">
				<h3 className="relative inline-block">
					{title}

					<motion.span
						variants={bodyUnderline}
						className="absolute left-1/2 -translate-x-1/2 bottom-[-0.2rem] h-[0.2rem] w-[30%] bg-orange-500 rounded-full"
						style={{ backgroundColor: theme.underline }}
					/>
				</h3>
			</div>
		</motion.div>
	);
};

export default SectionSubtitle;
