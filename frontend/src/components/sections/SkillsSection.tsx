// src/components/sections/SkillsSection.tsx
// this is a section that renders the skills data for a career page

// ================== IMPORTS
import { motion } from "framer-motion";
import DeveloperFrame from "./Frames/DeveloperFrame";
import type { SkillsData, Theme } from "../../types/career";
import {
	containerVariants,
	headerVariants,
	itemWaveVariants,
	underlineVariants,
	viewportRepeat,
} from "../reusables/animations";

// ================== PROPS
type SkillsSectionProps = {
	skills: SkillsData;
	theme: Theme;
};

// ================== SKILLS SECTION
const SkillsSection = ({ skills, theme }: SkillsSectionProps) => {
	return (
		<DeveloperFrame id="skills" theme={theme}>
			<motion.div
				initial="hidden"
				whileInView="visible"
				viewport={viewportRepeat}
				className="skillsSection__parent relative flex w-full flex-col overflow-hidden px-4"
			>
				{/* ============================== SECTION WRAPPER */}
				<motion.div
					variants={containerVariants}
					className="skillsSection__wrapper mx-auto w-full md:w-[90%] lg:w-[70%]"
				>
					{/* ============================== SECTION HEADER */}
					<motion.div variants={headerVariants} className="text-left px-4">
						<div className="inline-block rounded-2xl bg-[#000000] p-3 font-unna text-[1rem] font-bold uppercase mb-56">
							<h2 className="relative inline-block">
								{skills.title}

								<motion.span
									variants={underlineVariants}
									className="absolute left-1/2 bottom-[-0.2rem] h-[0.2rem] w-[30%] -translate-x-1/2 rounded-full bg-orange-500"
								/>
							</h2>
						</div>
					</motion.div>

					{/* ============================== SKILLS GRID */}
					<motion.div
						variants={containerVariants}
						initial="hidden"
						whileInView="visible"
						viewport={viewportRepeat}
						className="grid grid-cols-2 gap-4 px-4 pb-20 sm:grid-cols-3 lg:grid-cols-4"
					>
						{skills.items.map((skill, index) => (
							<motion.div
								key={skill.name}
								custom={index} 
								variants={itemWaveVariants}
								initial="hidden"
								whileInView="visible"
								viewport={viewportRepeat}
								className="flex items-center justify-center rounded-xl border border-[#000AFD]/80 bg-[#000000]/20 px-4 py-4 text-center transition-all duration-300 hover:border-[#00FF91] hover:bg-[#000000] hover:text-[#00FF91]"
							>
								<h3 className="font-unna text-xl">{skill.name}</h3>
							</motion.div>
						))}
					</motion.div>
				</motion.div>
			</motion.div>
		</DeveloperFrame>
	);
};

export default SkillsSection;
