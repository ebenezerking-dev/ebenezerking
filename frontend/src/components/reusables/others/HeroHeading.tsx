// src/components/reusables/others/HeroHeading.tsx
// A reusable component that renders the hero header & subtitle

// ================== IMPORTS
import { motion } from "framer-motion";
import {
	header,
	headerUnderline,
	heroSubTitle,
	viewportRepeat,
} from "../animations/shared";

// ================== PROPS
type HeroHeadingProps = {
	title: string;
	subtitle: string;
	className?: string;
};

// ================== HERO HEADING
const HeroHeading = ({ title, subtitle, className = "" }: HeroHeadingProps) => {
	return (
		<>
			{/* ============================== TITLE */}
			<motion.div
				variants={header}
				initial="hidden"
				whileInView="visible"
				viewport={viewportRepeat}
				className={`header text-left px-4 ${className}`}
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

			{/* ============================== SUBTITLE */}
			<motion.div
				variants={heroSubTitle}
				initial="hidden"
				animate="visible"
				className="body__subtitle relative z-10 inline-flex bg-[#000000]/90 px-6 py-3 rounded-2xl border"
			>
				<h2 className="relative inline-block lg:text-4xl">{subtitle}</h2>

				<span className="absolute w-1.5 left-3 top-1/2 -translate-y-1/2 h-8 bg-orange-500 rounded-full" />
				<span className="absolute w-1.5 right-3 top-1/2 -translate-y-1/2 h-8 bg-orange-500 rounded-full" />
			</motion.div>
		</>
	);
};

export default HeroHeading;
