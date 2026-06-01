// =====================================
// src/Components/Reusables/ProjectBoard.tsx
// =====================================
import { motion, AnimatePresence } from "framer-motion";
import { Fragment } from "react";

type Project = {
	title: string;
	description: string;
	images: {
		mobile: string;
		tablet?: string;
		desktop?: string;
	};
	tech: string[];
	live?: string;
	github?: string;
};

type ProjectBoardProps = {
	items: Project[];
};

const ProjectBoard = ({ items }: ProjectBoardProps) => {
	return (
		<div className="projectBoard__parent flex flex-col gap-[3rem] w-full">
			<AnimatePresence>
				{items.map((project, index) => (
					<Fragment key={index}>
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 50 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, amount: 0.2 }}
							transition={{ duration: 0.6 }}
							className="overflow-hidden"
						>
							{/* ================= IMAGES SECTION */}
							<div className="relative w-full h-[22rem] flex justify-center overflow-hidden">
								{/* ================= LAPTOP IMAGE */}
								{project.images.desktop && (
									<div className="absolute z-10 bottom-[-3rem] md:bottom-0 w-full h-full flex justify-center">
										<img
											src={project.images.desktop}
											alt={project.title}
											className="w-full h-full object-contain"
										/>
									</div>
								)}

								{/* ================= MOBILE IMAGE */}
								{project.images.mobile && (
									<div className="absolute z-20 left-0 md:left-[5rem] lg:left-[12rem] bottom-[1rem] md:bottom-[0.9rem] h-[50%] w-auto bg-gradient-to-b from-[#22050c] via-[#ABE0F0] to-[#22050c] px-[0.3rem] pt-[0.3rem] rounded-[1rem]">
										<img
											src={project.images.mobile}
											alt={project.title}
											className="w-full h-full object-contain"
										/>
									</div>
								)}

								{/* ================= TABLET IMAGE */}
								{project.images.tablet && (
									<div className="absolute z-20 right-0 md:right-[5rem] lg:right-[12rem] bottom-[1rem] md:bottom-[0.9rem] h-[50%] w-auto bg-gradient-to-b from-[#22050c] via-[#ABE0F0] to-[#22050c] px-[0.3rem] pt-[0.3rem] rounded-[1rem]">
										<img
											src={project.images.tablet}
											alt={project.title}
											className="w-full h-full object-contain"
										/>
									</div>
								)}
							</div>

							{/* ================= PROJECT DETAILS */}
							<div className="p-[1rem] flex flex-col items-start md:items-center gap-[1.4rem]">
								{/* ================= TITILE */}
								<h3 className="text-[1.5rem] font-unna font-bold border-b-2 border-orange-500">
									{project.title}
								</h3>

								{/* ================= DESCRIPTION */}
								<p className="font-unna">{project.description}</p>

								{/* ================= TECH TOOLS */}
								<div className="flex flex-wrap gap-[0.5rem]">
									{project.tech.map((tech, idx) => (
										<span
											key={idx}
											className="border border-orange-500 p-1 rounded-[0.5rem]"
										>
											{tech}
										</span>
									))}
								</div>

								{/* ================= BUTTON LINKS */}
								<div className="flex gap-[1rem] pt-[0.5rem] text-[1.1rem] font-bold">
									{project.live && (
										<a
											href={project.live}
											target="_blank"
											rel="noopener noreferrer"
											className="border-2 border-orange-500 hover:border-[#00ff91] hover:text-[#00ff91] hover:bg-[#00485d] py-2 px-4 rounded-[0.5rem] transition-colors duration-300"
										>
											Live Demo
										</a>
									)}

									{project.github && (
										<a
											href={project.github}
											target="_blank"
											rel="noopener noreferrer"
											className="border-2 border-orange-500 hover:border-[#00ff91] hover:text-[#00ff91] hover:bg-[#00485d] py-2 px-4 rounded-[0.5rem] transition-colors duration-300"
										>
											GitHub
										</a>
									)}
								</div>
							</div>
						</motion.div>
						{index < items.length - 1 && (
							<hr className="border-orange-500/30 my-[1rem]" />
						)}
					</Fragment>
				))}
			</AnimatePresence>
		</div>
	);
};

export default ProjectBoard;
