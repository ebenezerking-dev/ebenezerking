// src/components/sections/developer/SkillsSection.tsx

// ================== IMPORTS
import { motion } from "framer-motion";
import { useState } from "react";
import CareerSectionFrame from "../frames/shared/CareerSectionFrame";
import type { SkillsData, Theme } from "../../../types/career";
import RippleButton from "../../reusables/others/RippleButton";
import useBreakpoint from "../../../hooks/useBreakpoint";
import SectionHeader from "../../reusables/others/SectionHeader";
import BottomDivider from "../../reusables/others/BottomDivider";
import {
	viewportRepeat,
	developer,
	skillsRowStagger,
	skillItem,
	cardHover,
	seeMoreButton,
	buttonLayout,
} from "../../reusables/animations";

// ================== PROPS
type SkillsSectionProps = {
	skills: SkillsData;
	theme: Theme;
};

// ================== SKILLS SECTION
const SkillsSection = ({ skills, theme }: SkillsSectionProps) => {
	const breakpoint = useBreakpoint();
	const [showAll, setShowAll] = useState(false);

	const getVisibleCount = () => {
		const rows = 3;
		switch (breakpoint) {
			case "mobile":
				return 2 * rows;
			case "sm":
				return 3 * rows;
			case "lg":
				return 4 * rows;
			default:
				return 4 * rows;
		}
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
					{/* === */}
					{/* ============================== SKILLS HEADER */}
					<SectionHeader title={skills.title} />

					{/* ============================== SKILLS BODY */}
					<motion.div
						layout
						transition={buttonLayout}
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
									layout
									transition={buttonLayout}
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
							layout
							transition={buttonLayout}
							variants={seeMoreButton}
							initial="hidden"
							whileInView="visible"
							viewport={viewportRepeat}
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
			<BottomDivider theme={theme} />
		</CareerSectionFrame>
	);
};

export default SkillsSection;
