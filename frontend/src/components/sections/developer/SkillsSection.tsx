// src/components/sections/developer/SkillsSection.tsx

// ================== IMPORTS
import { motion } from "framer-motion";
import { useState } from "react";
import CareerSectionFrame from "../frames/shared/CareerSectionFrame";
import type { SkillsData, Theme } from "../../../types/career";
import RippleButton from "../../reusables/others/RippleButton";
import {
	viewportRepeat,
	developer,
	header,
	headerUnderline,
	skillsRowStagger,
	skillItem,
	cardHover,
	bottomDivider,
} from "../../reusables/animations/developerSc";

// ================== PROPS
type SkillsSectionProps = {
	skills: SkillsData;
	theme: Theme;
};

// ================== SKILLS SECTION
const SkillsSection = ({ skills, theme }: SkillsSectionProps) => {
	const [showAll, setShowAll] = useState(false);

	const getVisibleCount = () => {
		const columns = 4;
		const rows = 3;
		return columns * rows;
	};

	const visibleSkills = showAll
		? skills.items
		: skills.items.slice(0, getVisibleCount());
	const hasMoreSkills = skills.items.length > getVisibleCount();

	return (
		<CareerSectionFrame id="skills" theme={theme}>
			<motion.div
				variants={developer}
				initial="hidden"
				whileInView="visible"
				viewport={viewportRepeat}
				className="parent relative flex w-full flex-col overflow-hidden px-4"
			>
				{/* ============================== SKILLS WRAPPER */}
				<motion.div className="wrapper w-full md:w-[90%] lg:w-[70%] mx-auto pb-20">
					{/* ============================== SKILLS HEADER */}
					<motion.div variants={header} className="header text-left px-4">
						<div className="inline-block rounded-2xl bg-[#000000] p-3 font-unna text-[1rem] font-bold uppercase mb-56">
							<h2 className="relative inline-block">
								{skills.title}
								<motion.span
									variants={headerUnderline}
									className="absolute left-1/2 bottom-[-0.2rem] h-[0.2rem] w-[30%] -translate-x-1/2 rounded-full bg-orange-500"
								/>
							</h2>
						</div>
					</motion.div>

					{/* ============================== SKILLS BODY */}
					<motion.div
						variants={skillsRowStagger}
						initial="hidden"
						whileInView="visible"
						viewport={viewportRepeat}
						className="body grid grid-cols-2 gap-4 px-4 pb-10 sm:grid-cols-3 lg:grid-cols-4"
					>
						{/* ============================== SKILLS GRID */}
						{visibleSkills.map((skill, index) => {
							const Icon = skill.icon;
							return (
								<motion.div
									key={skill.name}
									custom={index}
									variants={skillItem}
									initial="hidden"
									whileInView="visible"
									viewport={viewportRepeat}
									whileHover={cardHover}
									className="flex flex-col items-center justify-center rounded-xl border border-[#000AFD]/80 bg-[#000000]/20 px-4 py-6 text-center transition-all duration-300 hover:border-[#00FF91] hover:bg-[#000000] hover:text-[#00FF91]"
									data-skill-name={skill.name}
									data-skill-index={index}
								>
									{Icon && <Icon className="mb-3 text-3xl" />}
									<h3 className="font-unna text-xl">{skill.name}</h3>
								</motion.div>
							);
						})}
					</motion.div>

					{/* ============================== SEE MORE BUTTON */}
					{hasMoreSkills && (
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={viewportRepeat}
							transition={{ delay: 0.3 }}
							className="flex justify-center px-4"
						>
							<RippleButton onClick={() => setShowAll(!showAll)} size="lg">
								{showAll ? "Show Less" : "See More"}
							</RippleButton>
						</motion.div>
					)}
				</motion.div>
			</motion.div>
			{/* ===================== GLOWING BOTTOM DIVIDER ===================== */}
			<motion.div
				variants={bottomDivider}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: false, amount: 0.2 }}
				className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-0.5 bg-linear-to-r from-transparent via-orange-500 to-transparent origin-left"
			/>
		</CareerSectionFrame>
	);
};

export default SkillsSection;
