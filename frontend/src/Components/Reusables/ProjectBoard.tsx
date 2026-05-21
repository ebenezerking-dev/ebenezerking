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
				{/* ================= TV SCREEN PARENT HEIGHT (INSIDE) */}
				<div className="tvFrameInsideBorder relative w-full h-[35rem] md:h-[32rem] md:bg-gray-900">
					{/* <div className="tvFrameInsideBorder relative w-full h-[45rem] md:h-[30rem] lg:h-[30rem]"> */}
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
										loop
										playsInline
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
										<div className="projectCard flex flex-col justify-between overflow-hidden h-full w-full">
											{/* ================= TV IMAGES */}
											<div className="w-full flex justify-center items-center h-[20rem] p-1 md:bg-orange-200">
												{/* === MOBILE */}
												{project.images.mobile && (
													<div className="w-[42.5%] md:[10%] h-full">
														<img
															src={project.images.mobile}
															alt={project.title}
															className="w-full h-full object-contain"
														/>
													</div>
												)}

												{/* === TABLET */}
												{project.images.tablet && (
													<div className="w-[57.5%] md:[10%] h-full">
														<img
															src={project.images.tablet}
															alt={project.title}
															className="w-full h-full object-contain"
														/>
													</div>
												)}

												{/* === DESKTOP */}
												{project.images.desktop && (
													<div className="hidden md:flex md:w-[80%] h-full">
														<img
															src={project.images.desktop}
															alt={project.title}
															className="w-full h-full object-contain"
														/>
													</div>
												)}
											</div>

											{/* =========================== DETAILS SECTION*/}
											<div className="flex flex-col justify-evenly px-1 h-[15rem] md:h-[12rem] md:bg-gray-900">
												{/* <div className="flex flex-col gap-2 h-[18rem] md:h-[16rem] lg:h-[16rem]"> */}
												<div className="text-[1.25rem] font-bold text-orange-500 text-start bg-black/80 backdrop-blur-sm rounded-[0.5rem] md:shadow-[0_0_5px_rgba(255,165,0,0.7)]">
													{/* =========== TITLE */}
													<h4 className="border-l border-r border-orange-500 px-2 py-[0.2rem] bg-black/80 backdrop-blur-sm rounded-[0.5rem]">
														{project.title}
													</h4>
												</div>

												{/* =========== DESCRIPTION */}
												<div className="text-[1.1rem] bg-black/80 backdrop-blur-sm rounded-[0.5rem] md:shadow-[0_0_5px_rgba(255,165,0,0.7)] border-l border-r border-orange-500 px-2 py-[0.2rem] break-words">
													<p>{project.description}</p>
												</div>

												{/* =========== TECHNOLOGIES */}
												<div className="flex flex-wrap gap-[0.5rem]">
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
