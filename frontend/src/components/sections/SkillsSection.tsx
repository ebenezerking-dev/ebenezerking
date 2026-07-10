// src/components/sections/SkillsSection.tsx
// this is a section that renders the skills data for a career page
// ================== IMPORTS
import SectionFrame from "./Frames/SectionFrame";
import { motion } from "framer-motion";
import type { Skill, Theme } from "../../types/career";
import { viewportRepeat } from "../reusables/animations/sectionAnimations";

// ================== PROPS
type SkillSectionProps = {
	skills: Skill[];
	theme: Theme;
};

// ================== SKILL SECTION
const SkillSection = ({ skills, theme }: SkillSectionProps) => {
	return (
		<SectionFrame id="skills" theme={theme}>
			<motion.div
				initial="hidden"
				whileInView="visible"
				viewport={viewportRepeat}
				className="skillsSection__parent relative h-auto w-full flex flex-col overflow-hidden px-4"
			></motion.div>
			{/* Skills content goes here */}
		</SectionFrame>
	);
};

export default SkillSection;
