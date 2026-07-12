// src/components/sections/developer/ProjectsSection.tsx
// this is a section that renders the projects data for a career page
// ================== IMPORTS
import ProjectBoard from "../../reusables/ProjectBoard";
import DeveloperFrame from "../../sections/frames/developer/DeveloperFrame";
import { motion } from "framer-motion";
import type { ProjectData, Theme } from "../../../types/career";
import {
	sectionContainerVariants,
	headerVariants,
	underlineVariants,
	dividerVariants,
	viewportRepeat,
} from "../../reusables/animations";

// ================== PROPS
type ProjectsSectionProps = {
	projects: ProjectData;
	theme: Theme;
};

// ================== PROJECTS SECTION
const ProjectsSection = ({ projects, theme }: ProjectsSectionProps) => {
	return (
		<DeveloperFrame id="projects" theme={theme}>
			<motion.div
				initial="hidden"
				whileInView="visible"
				viewport={viewportRepeat}
				className="parent relative h-auto w-full flex flex-col overflow-hidden"
			>
				{/* ============================== PROJECTS WRAPPER */}
				<motion.div
					variants={sectionContainerVariants}
					className="wrapper w-full md:w-[90%] lg:w-[70%] mx-auto"
				>
					{/* ============================== PROJECTS HEADER */}
					<motion.div variants={headerVariants} className="text-left px-4">
						<div className="header inline-block uppercase font-unna font-bold text-[1rem] mb-56 bg-[#000000] p-3 rounded-2xl">
							<h2 className="header relative inline-block">
								{projects.title}
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

					{/* ============================== PROJECTS BODY */}
					<motion.div className="body flex flex-col justify-center px-2 gap-4 lg:gap-3 w-full pb-20">
						<ProjectBoard items={projects.items} />
					</motion.div>
				</motion.div>

				{/* ===================== GLOWING BOTTOM DIVIDER ===================== */}
				<motion.div
					variants={dividerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: false, amount: 0.2 }}
					className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-0.5 bg-linear-to-r from-transparent via-orange-500 to-transparent origin-left"
				/>
			</motion.div>
		</DeveloperFrame>
	);
};

export default ProjectsSection;
