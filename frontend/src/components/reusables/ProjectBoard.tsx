// src/Components/Reusables/ProjectBoard.tsx
// this is a reusable component that renders a board of project cards with animation
// ================== IMPORTS
import { motion, AnimatePresence } from "framer-motion";
import { Fragment } from "react";
import RippleButton from "../reusables/RippleButton";
import type { Project } from "../../types/career";
import {
	containerVariants,
	projectCardVariants,
	deviceImageVariants,
	fadeInUpVariants,
	techTagVariants,
	hrVariants,
	scaleVariants,
	viewportRepeat,
} from "../reusables/animations";

// ================== INTERFACE
type ProjectBoardProps = {
	items: Project[];
};

// ================== PROJECT BOARD
const ProjectBoard = ({ items }: ProjectBoardProps) => {
	return (
		<motion.div
			variants={containerVariants}
			initial="hidden"
			whileInView="visible"
			viewport={viewportRepeat}
			className="projectBoard__parent flex flex-col gap-12 w-full"
		>
			<AnimatePresence>
				{items.map((project, index) => (
					<Fragment key={index}>
						<motion.div
							variants={projectCardVariants}
							className="overflow-hidden"
						>
							{/* ================= IMAGES SECTION */}
							<div className="relative w-full h-60 sm:h-88 lg:h-90 flex justify-center overflow-hidden">
								{/* ================= DESKTOP */}
								{project.images.desktop && (
									<motion.div
										variants={deviceImageVariants}
										initial="hidden"
										whileInView="visible"
										viewport={viewportRepeat}
										transition={{ delay: 0.2 }}
										className="absolute z-10 w-full h-full flex justify-center bottom-0"
									>
										<img
											src={project.images.desktop}
											alt={project.title}
											className="w-full h-full object-contain"
										/>
									</motion.div>
								)}

								{/* ================= MOBILE */}
								{project.images.mobile && (
									<motion.div
										variants={deviceImageVariants}
										initial="hidden"
										whileInView="visible"
										viewport={viewportRepeat}
										transition={{ delay: 0.2 }}
										className="absolute z-20 left-0 sm:left-24 bottom-11 sm:bottom-24 h-32 w-20 sm:h-40 sm:w-30 lg:h-60 lg:w-30 lg:left-44 lg:bottom-4 bg-linear-to-r from-[#22050c] via-[#ABE0F0] to-[#22050c] rounded-2xl"
									>
										<img
											src={project.images.mobile}
											alt={project.title}
											className="w-full h-full object-contain"
										/>
									</motion.div>
								)}

								{/* ================= TABLET */}
								{project.images.tablet && (
									<motion.div
										variants={deviceImageVariants}
										initial="hidden"
										whileInView="visible"
										viewport={viewportRepeat}
										transition={{ delay: 0.3 }}
										className="absolute z-20 right-0 sm:right-24 bottom-3 sm:bottom-14 h-36 w-26 sm:h-50 sm:w-40 lg:h-60 lg:w-40 lg:right-44 lg:bottom-4 bg-linear-to-r from-[#22050c] via-[#ABE0F0] to-[#22050c] rounded-2xl"
									>
										<img
											src={project.images.tablet}
											alt={project.title}
											className="w-full h-full object-contain"
										/>
									</motion.div>
								)}
							</div>

							{/* ================= PROJECT DETAILS */}
							<motion.div
								variants={containerVariants}
								initial="hidden"
								whileInView="visible"
								viewport={viewportRepeat}
								className="py-4 px-2 flex flex-col items-start sm:items-center gap-[1.4rem]"
							>
								<motion.div variants={fadeInUpVariants}>
									<div className="bg-[#000000]/20 p-2 rounded-lg">
										<h3 className="relative text-2xl font-unna font-bold">
											{project.title}
											<motion.span className="absolute left-1/2 -translate-x-1/2 bottom-[-0.2rem] h-[0.2rem] bg-orange-500 rounded-full" />
										</h3>
									</div>
								</motion.div>

								<motion.p
									variants={fadeInUpVariants}
									initial="hidden"
									whileInView="visible"
									viewport={viewportRepeat}
									className="font-unna text-lg"
								>
									{project.description}
								</motion.p>

								<motion.div
									variants={containerVariants}
									initial="hidden"
									whileInView="visible"
									viewport={viewportRepeat}
									className="flex flex-wrap gap-2"
								>
									{project.technologies.map((tech) => (
										<motion.span
											key={tech}
											variants={techTagVariants}
											className="rounded-lg border border-[#000AFD]/80 bg-[#000000]/20 p-2"
										>
											{tech}
										</motion.span>
									))}
								</motion.div>

								<motion.div
									variants={containerVariants}
									initial="hidden"
									whileInView="visible"
									viewport={viewportRepeat}
									className="flex gap-4 pt-2"
								>
									{project.live && (
										<motion.div variants={scaleVariants}>
											<RippleButton href={project.live} size="lg" newTab>
												Live Demo
											</RippleButton>
										</motion.div>
									)}

									{project.github && (
										<motion.div variants={scaleVariants}>
											<RippleButton href={project.github} size="lg" newTab>
												GitHub
											</RippleButton>
										</motion.div>
									)}
								</motion.div>
							</motion.div>
						</motion.div>

						{index < items.length - 1 && (
							<motion.hr
								variants={hrVariants}
								initial="hidden"
								whileInView="visible"
								viewport={viewportRepeat}
								className="border-orange-500/30 my-4 origin-left"
							/>
						)}
					</Fragment>
				))}
			</AnimatePresence>
		</motion.div>
	);
};

export default ProjectBoard;
