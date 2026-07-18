// src/components/sections/developer/ProjectsSection.tsx
// this is a section that renders the projects data for a career page
// ================== IMPORTS
import CareerSectionFrame from "../frames/shared/CareerSectionFrame";
import ProjectBoard from "../../reusables/others/ProjectBoard";
import { motion } from "framer-motion";
import type { ProjectData, Theme } from "../../../types/career";
import SectionHeader from "../../reusables/others/SectionHeader";
import BottomDivider from "../../reusables/others/BottomDivider";
import {
	viewportRepeat,
	developer,
} from "../../reusables/animations";

// ================== PROPS
type ProjectsSectionProps = {
	projects: ProjectData;
	theme: Theme;
};

// ================== PROJECTS SECTION
const ProjectsSection = ({ projects, theme }: ProjectsSectionProps) => {
	return (
		<CareerSectionFrame id="projects" theme={theme}>
			<motion.div
				variants={developer}
				initial="hidden"
				whileInView="visible"
				viewport={viewportRepeat}
				className="parent relative h-auto w-full flex flex-col overflow-hidden"
			>
				{/* ============================== PROJECTS WRAPPER */}
				<motion.div className="wrapper w-full md:w-[90%] lg:w-[70%] mx-auto">
					{/* ===*/}
					{/* ============================== PROJECTS HEADER */}
					<SectionHeader title={projects.title} />

					{/* ============================== PROJECTS BODY */}
					<motion.div
						// variants={developerBody}
						// initial="hidden"
						// whileInView="visible"
						// viewport={viewportRepeat}
						className="body flex flex-col justify-center px-2 gap-4 lg:gap-3 w-full pb-20"
					>
						<ProjectBoard items={projects.items} />
					</motion.div>
				</motion.div>

				{/* ===================== GLOWING BOTTOM DIVIDER ===================== */}
				<BottomDivider theme={theme} />
			</motion.div>
		</CareerSectionFrame>
	);
};

export default ProjectsSection;
