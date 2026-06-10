// =====================================
// src/Components/Reusables/ProjectBoard.tsx (Cleaner version)
// =====================================
import { motion, AnimatePresence } from "framer-motion";
import { Fragment } from "react";
import RippleButton from "../reusables/RippleButton";
import {
	containerVariants,
	itemVariants,
	projectCardVariants,
	deviceImageVariants,
	techTagVariants,
	hrVariants,
	scaleVariants,
	viewportRepeat,
} from "../reusables/animations/sectionAnimations";

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
		<motion.div
			variants={containerVariants}
			initial="hidden"
			whileInView="visible"
			viewport={viewportRepeat}
			className="projectBoard__parent flex flex-col gap-[3rem] w-full"
		>
			<AnimatePresence>
				{items.map((project, index) => (
					<Fragment key={index}>
						<motion.div
							variants={projectCardVariants}
							className="overflow-hidden"
						>
							{/* ================= IMAGES SECTION */}
							<div className="relative w-full h-[22rem] flex justify-center overflow-hidden">
								{/* ================= DESKTOP */}
								{project.images.desktop && (
									<motion.div
										variants={deviceImageVariants}
										initial="hidden"
										whileInView="visible"
										viewport={viewportRepeat}
										transition={{ delay: 0.2 }}
										className="absolute z-10 bottom-[-3rem] md:bottom-0 w-full h-full flex justify-center"
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
										className="absolute z-20 left-0 md:left-[5rem] lg:left-[12rem] bottom-[0.7rem] md:bottom-[0.7rem] h-[10rem] w-[5rem] md:h-[12.5rem] md:w-[6.5rem] bg-gradient-to-r from-[#22050c] via-[#ABE0F0] to-[#22050c] p-1 rounded-[1rem]"
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
										className="absolute z-20 right-0 md:right-[5rem] lg:right-[12rem] bottom-[0.7rem] md:bottom-[0.7rem] h-[10.2rem] w-[7rem] md:h-[12.3rem] md:w-[7.9rem] bg-gradient-to-r from-[#22050c] via-[#ABE0F0] to-[#22050c] p-1 rounded-[1rem]"
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
								className="p-[1rem] flex flex-col items-start md:items-center gap-[1.4rem]"
							>
								<motion.div variants={itemVariants}>
									<div className="bg-[#000000]/20 p-2 rounded-[0.5rem]">
										<h3 className="relative text-2xl font-unna font-bold">
											{project.title}
											<motion.span
												variants={{
													hidden: { width: "0%", opacity: 0 },
													visible: {
														width: "30%",
														opacity: 1,
														transition: {
															duration: 0.6,
															delay: 0.3,
															ease: "easeInOut",
														},
													},
												}}
												className="absolute left-1/2 -translate-x-1/2 bottom-[-0.2rem] h-[0.2rem] bg-orange-500 rounded-full"
											/>
										</h3>
									</div>
								</motion.div>

								<motion.p variants={itemVariants} className="font-unna text-lg">
									{project.description}
								</motion.p>

								<motion.div
									variants={containerVariants}
									className="flex flex-wrap gap-[0.5rem] text-sm"
								>
									{project.tech.map((tech, idx) => (
										<motion.span
											key={idx}
											variants={techTagVariants}
											className="bg-[#000000]/20 border border-[#000AFD]/80 p-2 rounded-[0.5rem]"
										>
											{tech}
										</motion.span>
									))}
								</motion.div>

								<motion.div
									variants={containerVariants}
									className="flex gap-[1rem] pt-[0.5rem]"
								>
									{project.live && (
										<motion.div variants={scaleVariants}>
											<RippleButton href={project.live} size="lg">
												Live Demo
											</RippleButton>
										</motion.div>
									)}

									{project.github && (
										<motion.div variants={scaleVariants}>
											<RippleButton href={project.github} size="lg">
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
								className="border-orange-500/30 my-[1rem] origin-left"
							/>
						)}
					</Fragment>
				))}
			</AnimatePresence>
		</motion.div>
	);
};

export default ProjectBoard;
