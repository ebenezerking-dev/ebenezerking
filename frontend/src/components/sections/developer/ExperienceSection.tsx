// src/components/sections/developer/ExperienceSection.tsx
// this is a section that renders the experience data for a career page
// ================== IMPORTS
import CareerSectionFrame from "../frames/shared/CareerSectionFrame";
import { motion } from "framer-motion";
import type { ExperienceData, Theme } from "../../../types/career";
import SectionHeader from "../../reusables/others/SectionHeader";
import SectionSubtitle from "../../reusables/others/SectionSubtitle";
import BottomDivider from "../../reusables/others/BottomDivider";
import {
	viewportRepeat,
	developer,
	experimentBodyStagger,
	paragraphUp,
} from "../../reusables/animations";

// ================== PROPS
type ExperienceSectionProps = {
	experience: ExperienceData;
	theme: Theme;
};

// ================== EXPERIENCE SECTION
const ExperienceSection = ({ experience, theme }: ExperienceSectionProps) => {
	return (
		<CareerSectionFrame id="experience" theme={theme}>
			<motion.div
				variants={developer}
				initial="hidden"
				whileInView="visible"
				viewport={viewportRepeat}
				className="parent relative h-auto w-full flex flex-col overflow-hidden px-4"
			>
				{/* ============================== EXPERIENCE WRAPPER */}
				<motion.div className="wrapper w-full md:w-[90%] lg:w-[70%] mx-auto pb-20">
					{/* === */}
					{/* ============================== EXPERIENCE HEADER */}
					<SectionHeader title={experience.title} theme={theme} />

					{/* ============================== EXPERIENCE BODY */}
					<motion.div className="body flex flex-col gap-8 w-full md:p-4 text-lg">
						{experience.items.map((item) => (
							<motion.div
								key={`${item.company}-${item.role}`}
								variants={experimentBodyStagger}
								initial="hidden"
								whileInView="visible"
								viewport={viewportRepeat}
								className="w-full max-w-2xl mx-auto"
							>
								{/* ========== COMPANY NAME */}
								<SectionSubtitle title={item.company} theme={theme} />

								{/* ========== ROLE */}
								<motion.p
									variants={paragraphUp}
									initial="hidden"
									whileInView="visible"
									viewport={viewportRepeat}
									className="mt-4 font-semibold"
								>
									{item.role}
								</motion.p>

								{/* ========== DURATION */}
								<motion.p
									variants={paragraphUp}
									initial="hidden"
									whileInView="visible"
									viewport={viewportRepeat}
									className="text-sm text-white/70 mb-4"
								>
									{item.duration}
								</motion.p>

								{/* ========== DESCRIPTION */}
								<motion.ul
									variants={paragraphUp}
									initial="hidden"
									whileInView="visible"
									viewport={viewportRepeat}
									className="list-disc pl-5 space-y-2"
								>
									{item.description.map((desc) => (
										<li key={desc}>{desc}</li>
									))}
								</motion.ul>
							</motion.div>
						))}
					</motion.div>
				</motion.div>
			</motion.div>
			{/* ===================== GLOWING BOTTOM DIVIDER ===================== */}
			<BottomDivider theme={theme} />
		</CareerSectionFrame>
	);
};

export default ExperienceSection;
