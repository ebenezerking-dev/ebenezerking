// src/components/sections/CertificationSection.tsx
// this is a section that renders the certification data for a career page
// ================== IMPORTS
import SectionFrame from "./Frames/SectionFrame";
import { motion } from "framer-motion";
import type { Certification, Theme } from "../../types/career";
import { viewportRepeat } from "../reusables/animations/sectionAnimations";

// ================== PROPS
type CertificationSectionProps = {
	certifications: Certification[];
	theme: Theme;
};

// ================== SKILL SECTION
const CertificationSection = ({
	certifications,
	theme,
}: CertificationSectionProps) => {
	return (
		<SectionFrame id="certifications" theme={theme}>
			<motion.div
				initial="hidden"
				whileInView="visible"
				viewport={viewportRepeat}
				className="certificationsSection__parent relative h-auto w-full flex flex-col overflow-hidden px-4"
			></motion.div>
		</SectionFrame>
	);
};
