// =====================================
// src/Components/Reusables/ProjectBoard.tsx
// =====================================
import { motion, AnimatePresence } from "framer-motion";
import { Fragment } from "react";
import RippleButton from "../reusables/RippleButton";

// =====================================
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

// =====================================
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
									<div className="absolute z-20 left-0 md:left-[5rem] lg:left-[12rem] bottom-[0.7rem] md:bottom-[0.7rem] h-[10rem] w-[5rem] md:h-[12.5rem] md:w-[6.5rem] bg-gradient-to-r from-[#22050c] via-[#ABE0F0] to-[#22050c] p-1 rounded-[1rem]">
										<img
											src={project.images.mobile}
											alt={project.title}
											className="w-full h-full object-contain"
										/>
									</div>
								)}

								{/* ================= TABLET IMAGE */}
								{project.images.tablet && (
									<div className="absolute z-20 right-0 md:right-[5rem] lg:right-[12rem] bottom-[0.7rem] md:bottom-[0.7rem] h-[10.2rem] w-[7rem] md:h-[12.3rem] md:w-[7.9rem] bg-gradient-to-r from-[#22050c] via-[#ABE0F0] to-[#22050c] p-1 rounded-[1rem]">
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
								{/* ================= TITLE */}
								<h3 className="relative text-2xl font-unna font-bold">
									{project.title}
									<span className="absolute left-1/2 -translate-x-1/2 bottom-[-0.2rem] h-[0.2rem] w-[30%] bg-orange-500 rounded-full"></span>
								</h3>

								{/* ================= DESCRIPTION */}
								<p className="font-unna text-lg font-semibold">
									{project.description}
								</p>

								{/* ================= TECH TOOLS */}
								<div className="flex flex-wrap gap-[0.5rem] text-sm font-semibold">
									{project.tech.map((tech, idx) => (
										<span
											key={idx}
											className="border border-[#000AFD]/20 p-1 rounded-[0.5rem]"
										>
											{tech}
										</span>
									))}
								</div>

								{/* ================= BUTTON LINKS */}
								<div className="flex gap-[1rem] pt-[0.5rem]">
									{project.live && (
										<RippleButton href={project.live} size="lg">
											Live Demo
										</RippleButton>
									)}

									{project.github && (
										<RippleButton href={project.github} size="lg">
											GitHub
										</RippleButton>
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
