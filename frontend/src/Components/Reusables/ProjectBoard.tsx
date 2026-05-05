// =====================================
// src/Components/Reusables/ProjectBoard.tsx
// =====================================

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Project = {
	title: string;
	description: string;
	images: {
		mobile: string;
		tablet?: string;
		desktop?: string;
	};
	tech: string[];
	video?: string;
	live?: string;
	github?: string;
};

type ProjectBoardProps = {
	items: Project[];
	visibleCount: number;
};

const ProjectBoard = ({ items, visibleCount }: ProjectBoardProps) => {
	const [startIndex, setStartIndex] = useState(0);

	const handleNext = () => {
		const nextIndex = startIndex + visibleCount;
		if (nextIndex < items.length) {
			setStartIndex(nextIndex);
		} else {
			setStartIndex(0);
		}
	};

	const visibleItems = items.slice(startIndex, startIndex + visibleCount);
	const [activeProject, setActiveProject] = useState<Project | null>(null);
	return (
		<div className="projectBoard__parent flex flex-col items-center justify-center gap-4 w-full z-20 pb-[3rem] text-md:[#dbcfff]/90">
			{/* ================= TV FRAME (OUTER) */}
			<div className="tvFrameOuterBorder relative w-full px-[1rem] pt-[1rem] pb-[3rem] overflow-hidden flex flex-col items-center justify-start border border-orange-500 rounded-[1rem] flex-shrink-0">
				{/* ================= TV SCREEN (INSIDE) */}
				<div className="tvFrameInsideBorder relative w-full h-[40rem] md:h-[35rem] lg:h-[35rem] rounded-[1rem] bg-black">
					{/* ===== CUSTOM BORDERS ===== */}
					{/* ============================= TOP */}
					<div className="absolute top-[-1rem] left-[-2rem] -translate-x-[1rem] w-[120%] md:w-[110%] h-[1rem] bg-black/80 backdrop-blur-sm md:bg-black rounded-full z-0"></div>

					{/* ======================== BOTTOM */}
					<div className="absolute bottom-[-3rem] left-[-2rem] -translate-x-[1rem] w-[120%] md:w-[110%] h-[3rem] bg-black/80 backdrop-blur-sm md:bg-black rounded-full z-0"></div>

					{/* ============================= LEFT */}
					<div className="absolute left-[-1rem] top-1/2 -translate-y-1/2 h-[110%] w-[1rem] bg-black/80 backdrop-blur-sm md:bg-black rounded-full z-0"></div>

					{/* ============================= RIGHT */}
					<div className="absolute right-[-1rem] top-1/2 -translate-y-1/2 h-[110%] w-[1rem] bg-black/80 backdrop-blur-sm md:bg-black rounded-full z-0"></div>

					{/* ================= TV SCREEN CONTENT */}
					<AnimatePresence mode="wait">
						{activeProject ? (
							<motion.div
								key="video"
								className="w-full h-full"
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
							>
								<div className="w-full h-full relative group">
									<video
										src={activeProject.video}
										controls
										autoPlay
										className="absolute inset-0 w-full h-full object-contain"
									/>

									{/* === VIDEO CLOSE BUTTON */}
									<button
										onClick={() => setActiveProject(null)}
										className="absolute top-4 right-4 z-20 opacity-100 md:opacity-0 md:group-hover:opacity-100 bg-orange-500 text-[#450693] font-bold px-4 py-1 rounded border border-[#dbcfff] transition-opacity duration-300"
									>
										Close
									</button>
								</div>
							</motion.div>
						) : (
							<motion.div
								key={startIndex}
								className="w-full h-full grid grid-cols-1 gap-4 md:gap-6 items-stretch"
								initial={{ opacity: 0, filter: "blur(6px)" }}
								animate={{ opacity: 1, filter: "blur(0px)" }}
								exit={{ opacity: 0, filter: "blur(6px)" }}
								transition={{ duration: 0.8 }}
							>
								{visibleItems.map((project, index) => (
									<motion.div
										key={index}
										className="w-full flex flex-col"
										transition={{ type: "spring", stiffness: 300 }}
									>
										{/* ================= PROJECT CARD */}
										<div className="projectCard flex flex-col overflow-hidden h-full">
											{/* ================= TV IMAGES */}
											<div className="w-full flex justify-between flex-1 px-4 py-2">
												{/* === MOBILE */}
												{project.images.tablet && (
													<div className="h-full p-[0.1rem] h-[9rem] md:h-[14rem] lg:h-[16rem]">
														<img
															src={project.images.mobile}
															alt={project.title}
															className="w-full h-full object-cover rounded-md"
														/>
													</div>
												)}

												{/* === TABLET */}
												{project.images.tablet && (
													<div className="h-full p-[0.1rem] h-[9rem] md:h-[14rem] lg:h-[16rem]">
														<img
															src={project.images.tablet}
															alt={project.title}
															className="w-full h-full object-cover rounded-md"
														/>
													</div>
												)}

												{/* === DESKTOP */}
												{project.images.desktop && (
													<div className="hidden md:flex h-full p-[0.1rem] md:h-[14rem] lg:h-[16rem]">
														<img
															src={project.images.desktop}
															alt={project.title}
															className="w-full h-full object-cover rounded-md"
														/>
													</div>
												)}
											</div>

											{/* =========================== DETAILS */}
											<div className="px-4 py-2 flex flex-col gap-[0.7rem] h-[18rem] md:h-[16rem] lg:h-[16rem]">
												<div className="text-[1.25rem] font-bold text-orange-500 text-start bg-black/80 backdrop-blur-sm rounded-[0.5rem] md:shadow-[0_0_5px_rgba(255,165,0,0.7)]">
													{/* =========== TITLE */}
													<h4 className="border-l border-r border-orange-500 px-2 py-[0.2rem] bg-black/80 backdrop-blur-sm rounded-[0.5rem]">
														{project.title}
													</h4>
												</div>

												{/* =========== DESCRIPTION */}
												<div className="text-[1.1rem] bg-black/80 backdrop-blur-sm rounded-[0.5rem] line-clamp-3 md:line-clamp-2 h-[5.6rem] md:h-[4rem] lg:h-[4rem] md:shadow-[0_0_5px_rgba(255,165,0,0.7)]">
													<p className="border-l border-r border-orange-500 px-2 py-[0.2rem] bg-black/80 backdrop-blur-sm rounded-[0.5rem]">
														{project.description}
													</p>
												</div>

												{/* =========== TECHNOLOGIES */}
												<div className="grid grid-rows-2 grid-flow-col gap-[0.5rem]">
													{project.tech.map((tech, idx) => (
														<span
															key={idx}
															className="text-[0.9rem] border-l border-r border-orange-500 px-2 py-[0.2rem] bg-black/80 backdrop-blur-sm rounded-[0.5rem] md:shadow-[0_0_5px_rgba(255,165,0,0.7)]"
														>
															{tech}
														</span>
													))}
												</div>

												{/* =========== LINKS */}
												<div className="flex justify-center md:justify-start gap-4">
													{/* === PLAY */}
													{project.video && (
														<button
															onClick={() => setActiveProject(project)}
															className="w-[5rem] flex justify-center bg-orange-500 text-[#450693] font-bold hover:bg-[#dbcfff] hover:text-orange-500 py-2 rounded-[0.5rem] transition-colors duration-300 border border-[#dbcfff]"
														>
															Play
														</button>
													)}

													{/* === LIVE */}
													{project.live && (
														<a
															href={project.live}
															target="_blank"
															rel="noopener noreferrer"
															className="w-[5rem] flex justify-center bg-orange-500 text-[#450693] font-bold hover:bg-[#dbcfff] hover:text-orange-500 py-2 rounded-[0.5rem] transition-colors duration-300 border border-[#dbcfff]"
														>
															Live
														</a>
													)}

													{/* === GITHUB */}
													{project.github && (
														<a
															href={project.github}
															target="_blank"
															rel="noopener noreferrer"
															className="w-[5rem] flex justify-center bg-orange-500 text-[#450693] font-bold hover:bg-[#dbcfff] hover:text-orange-500 py-2 rounded-[0.5rem] transition-colors duration-300 border border-[#dbcfff]"
														>
															Code
														</a>
													)}
												</div>
											</div>
										</div>
									</motion.div>
								))}
							</motion.div>
						)}
					</AnimatePresence>
				</div>
				{/* ================= FAKE TV BUTTONS */}
				<div className="absolute bottom-[1rem] left-0 w-full px-4 flex justify-between items-center gap-8 mt-4 z-20 bg-black">
					<div className="w-3 h-3 bg-orange-500 rounded-full"></div>

					<div className="flex gap-2">
						<div className="w-1 h-1 bg-orange-500 md:bg-[#dbcfff] rounded-full"></div>
						<div className="w-1 h-1 bg-[#dbcfff] md:bg-orange-500 rounded-full"></div>
						<div className="w-1 h-1 bg-orange-500 md:bg-[#dbcfff] rounded-full"></div>
					</div>

					<div className="w-3 h-3 bg-orange-500 rounded-full"></div>
				</div>
			</div>

			{/* ================= STEPS */}
			<div className="border border-orange-500 px-[1.5rem]"></div>
			<div className="border border-orange-500 px-[1.5rem]"></div>

			{/* ================= BUTTON */}
			{items.length > visibleCount && (
				<button
					onClick={handleNext}
					className="bg-orange-500 text-[#450693] font-bold hover:bg-[#dbcfff] hover:text-orange-500 py-2 px-6 rounded-[0.5rem] transition-colors duration-300 border border-[#dbcfff] cursor-pointer"
				>
					Switch
				</button>
			)}
		</div>
	);
};

export default ProjectBoard;
