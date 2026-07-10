// src/components/sections/ExperienceSection.tsx
// this is a section that renders the experience data for a career page
// ================== IMPORTS
import SectionFrame from "./Frames/SectionFrame";
import { motion } from "framer-motion";
import type { Experience, Theme } from "../../types/career";
import { viewportRepeat } from "../reusables/animations/sectionAnimations";

// ================== PROPS
type ExperienceSectionProps = {
	experience: Experience[];
	theme: Theme;
};

// ================== SKILL SECTION
const ExperienceSection = ({ experience, theme }: ExperienceSectionProps) => {
	return (
		<SectionFrame id="experience" theme={theme}>
			<motion.div
				initial="hidden"
				whileInView="visible"
				viewport={viewportRepeat}
				className="experienceSection__parent relative h-auto w-full flex flex-col overflow-hidden px-4"
			></motion.div>
			{/* Skills content goes here */}
		</SectionFrame>
	);
};

export default ExperienceSection;
