// src/components/sections/ExperienceSection.tsx
// this is a section that renders the experience data for a career page
// ================== IMPORTS
import DeveloperFrame from "./Frames/DeveloperFrame";
import { motion } from "framer-motion";
import type { ExperienceData, Theme } from "../../types/career";
import {
	containerVariants,
	headerVariants,
	underlineVariants,
	viewportRepeat,
} from "../reusables/animations";

// ================== PROPS
type ExperienceSectionProps = {
	experience: ExperienceData;
	theme: Theme;
};

// ================== SKILL SECTION
const ExperienceSection = ({ experience, theme }: ExperienceSectionProps) => {
	return (
		<DeveloperFrame id="experience" theme={theme}>
			<motion.div
				initial="hidden"
				whileInView="visible"
				viewport={viewportRepeat}
				className="experienceSection__parent relative h-auto w-full flex flex-col overflow-hidden px-4"
			>
				{/* ============================== SECTION WRAPPER */}
				<motion.div
					variants={containerVariants}
					className="projectSection__wrapper w-full md:w-[90%] lg:w-[70%] mx-auto"
				>
					{/* ============================== CONTENT HEADER */}
					<motion.div variants={headerVariants} className="text-left px-4">
						<div className="wrapper__header inline-block uppercase font-unna font-bold text-[1rem] mb-56 bg-[#000000] p-3 rounded-2xl">
							<h2 className="header relative inline-block">
								{experience.title}
								<motion.span
									variants={underlineVariants}
									initial="hidden"
									whileInView="visible"
									viewport={viewportRepeat}
									className="absolute left-1/2 -translate-x-1/2 bottom-[-0.2rem] h-[0.2rem] w-[30%] bg-orange-500 rounded-full"
								/>
							</h2>
						</div>
					</motion.div>
				</motion.div>
			</motion.div>
			{/* Skills content goes here */}
		</DeveloperFrame>
	);
};

export default ExperienceSection;
