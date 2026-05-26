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

	// 🎯 NEW: which “TV channel” is active inside the visible group
	const [selectedIndex, setSelectedIndex] = useState(0);

	const handleNext = () => {
		const nextIndex = startIndex + visibleCount;

		if (nextIndex < items.length) {
			setStartIndex(nextIndex);
		} else {
			setStartIndex(0);
		}

		setSelectedIndex(0);
	};

	const visibleItems = items.slice(startIndex, startIndex + visibleCount);

	const activeProject = visibleItems[selectedIndex] ?? null;

	const [activeProjectModal, setActiveProject] = useState<Project | null>(null);

	const handleSelect = (index: number) => {
		setSelectedIndex(index);
	};

	return (
		<div className="projectBoard__parent flex flex-col items-center justify-center gap-4 w-full z-20">
			{/* ================= TV + PARENT FRAME */}
			<div className="tvOuterFrame relative w-full px-[1rem] pt-[1rem] pb-[3rem] overflow-hidden flex flex-col items-center justify-start border-b-4 lg:border-2 border-red-500 rounded-[1rem] lg:bg-[#22050c]flex-shrink-0">
				<AnimatePresence mode="wait">
					{activeProjectModal ? (
						<motion.div
							key="video"
							className="w-full h-full"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
						>
							<div className="w-full h-full relative group">
								<video
									src={activeProjectModal.video}
									controls
									autoPlay
									loop
									playsInline
									className="absolute inset-0 w-full h-full object-contain"
								/>

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
							className="w-full h-full grid grid-cols-1 gap-4 md:gap-6 items-stretch mb-[1rem]"
							initial={{ opacity: 0, filter: "blur(6px)" }}
							animate={{ opacity: 1, filter: "blur(0px)" }}
							exit={{ opacity: 0, filter: "blur(6px)" }}
							transition={{ duration: 0.8 }}
						>
							{visibleItems.map((project, index) => (
								<motion.div
									key={index}
									onClick={() => handleSelect(index)}
									className={`flex flex-col h-full w-full cursor-pointer transition-all duration-300 lg:bg-red-900 ${
										index === selectedIndex
											? "scale-[1.01] shadow-[0_0_5px_rgba(255,165,0,0.10)]"
											: "opacity-80 scale-100"
									}`}
								>
									{/* ================= PROJECT CARD + SCREEN */}
									<div className="projectCard flex flex-col justify-between overflow-hidden">
										{/* ================= IMAGES SECTION */}
										<div className="w-full flex justify-center items-center h-[20rem] py-2">
											{project.images.mobile && (
												<div className="w-[42.5%] md:[10%] h-full">
													<img
														src={project.images.mobile}
														alt={project.title}
														className="w-full h-full object-contain"
													/>
												</div>
											)}

											{project.images.desktop && (
												<div className="hidden md:flex md:w-[80%] h-full">
													<img
														src={project.images.desktop}
														alt={project.title}
														className="w-full h-full object-contain"
													/>
												</div>
											)}

											{project.images.tablet && (
												<div className="w-[57.5%] md:[10%] h-full">
													<img
														src={project.images.tablet}
														alt={project.title}
														className="w-full h-full object-contain"
													/>
												</div>
											)}
										</div>

										{/* ================= DETAILS SECTION */}
										<div className="flex flex-col gap-[0.5rem] py-[1rem]">
											<h4 className="text-[1.25rem] font-unna border-b border-red-500 px-2 py-[0.2rem] lg:bg-[#22050c] backdrop-blur-sm rounded-[0.5rem]">
												{project.title}
											</h4>

											<p className="text-[1.25rem] font-unna border-b border-red-500 px-2 py-[0.2rem lg:bg-[#22050c] backdrop-blur-sm rounded-[0.5rem]">
												{project.description}
											</p>

											<div className="flex flex-wrap gap-[0.5rem]">
												{project.tech.map((tech, idx) => (
													<span
														key={idx}
														className="text-[0.9rem] font-unna border-b border-red-500 px-2 py-[0.2rem] lg:bg-[#22050c] backdrop-blur-sm rounded-[0.5rem]"
													>
														{tech}
													</span>
												))}
											</div>
										</div>
									</div>
								</motion.div>
							))}
						</motion.div>
					)}
				</AnimatePresence>

				{/* ================= CONTROLS (TV REMOTE STYLE, STATIC) */}
				<div className="remoteControls">
					{/* LIVE / CODE BUTTONS */}
					{activeProject && activeProject.video && (
						<div className="absolute bottom-[0.5rem] left-[1.5rem] flex gap-4">
							{activeProject.live && (
								<a
									href={activeProject.live}
									target="_blank"
									rel="noopener noreferrer"
									className="w-[5rem] flex justify-center bg-red-500 text-black font-bold hover:bg-orange-500 py-1 rounded-[0.5rem] transition-colors duration-300 border border-orange-500"
								>
									Live
								</a>
							)}
							{activeProject.github && (
								<a
									href={activeProject.github}
									target="_blank"
									rel="noopener noreferrer"
									className="w-[5rem] flex justify-center bg-red-500 text-black font-bold hover:bg-orange-500 py-1 rounded-[0.5rem] transition-colors duration-300 border border-orange-500"
								>
									Code
								</a>
							)}
							{activeProject.video && (
								<button
									onClick={() => setActiveProject(activeProject)}
									className="w-[5rem] flex justify-center bg-red-500 text-black font-bold hover:bg-orange-500 py-1 rounded-[0.5rem] transition-colors duration-300 border border-orange-500"
								>
									Play
								</button>
							)}
						</div>
					)}
				</div>
			</div>

			{/* ================= TV STAND STEPS */}
			<div className="border-2 border-red-500 px-[1.5rem]"></div>
			<div className="border-2 border-red-500 px-[1.5rem]"></div>

			{/* ================= NEXT BUTTON */}
			{items.length > visibleCount && (
				<button
					onClick={handleNext}
					className="bg-red-500 text-black font-bold hover:bg-orange-500 py-2 px-6 rounded-[0.5rem] transition-colors duration-300 border border-orange-500 cursor-pointer"
				>
					Next
				</button>
			)}
		</div>
	);
};

export default ProjectBoard;
