// =====================================
// src/Components/ProjectsSection.tsx
// ===================================== PROJECTS SECTION COMPONENT

import darkNight from "../Assets/backgroundImage/darkNight.webp";
import PageLayout from "./Reusables/PageLayout";
import ProjectBoard from "./Reusables/ProjectBoard";
import { useState, useEffect } from "react";
import Mobile from "../Assets/Projects/taxlator/images/Mobile.webp";
import Ipad from "../Assets/Projects/taxlator/images/iPad.webp";
import Macbook from "../Assets/Projects/taxlator/images/Macbook.webp";
import taxlator from "../Assets/Projects/taxlator/video/taxlator.mp4";

const projects = [
	{
		images: {
			mobile: Mobile,
			tablet: Ipad,
			desktop: Macbook,
		},
		title: "Taxlator",
		description:
			"A full-stack tax calculation app with real-time updates. so you can calculate your taxes instantly.",
		tech: ["React", "Tailwind", "TypeScript", "Node.js", "MongoDB"],
		video: taxlator,
		live: "https://taxlator-v2.vercel.app/",
		github: "https://github.com/ebenezerkingv2/taxlatorV2_frontend",
	},
	{
		images: {
			mobile: Mobile,
			tablet: Ipad,
			desktop: Macbook,
		},
		title: "Taxlator",
		description:
			"A full-stack tax calculation app with real-time updates. so you can calculate your taxes in a flash.",
		tech: ["React", "Tailwind", "TypeScript", "Node.js", "MongoDB"],
		video: taxlator,
		live: "https://taxlatorv2.vercel.app/",
		github: "https://github.com/ebenezerkingv2/taxlatorV2_frontend",
	},
];
// =====================================

const ProjectsSection = () => {
	const [visibleCount, setVisibleCount] = useState(1);

	useEffect(() => {
		const updateCount = () => {
			if (window.innerWidth >= 1024) {
				setVisibleCount(1);
			} else if (window.innerWidth >= 768) {
				setVisibleCount(1);
			} else {
				setVisibleCount(1);
			}
		};

		updateCount();
		window.addEventListener("resize", updateCount);
		return () => window.removeEventListener("resize", updateCount);
	}, []);
	// =====================================

	return (
		<section className="projectSection relative min-h-screen w-full flex flex-col md:bg-black text-[#dbcfff] overflow-hidden">
			{/* ============================== HERO IMAGE */}
			<img
				src={darkNight}
				alt="Background"
				className="projectSection__mobile--backgroundImage md:hidden absolute inset-0 w-full h-full object-cover object-[center_30%]"
			/>

			{/* ============================== PAGE LAYOUT */}
			<PageLayout
				header={
					<div className="projectSectionHeader__parent text-[1.1rem] text-[#dbcfff] text-center md:text-[1rem] w-fit mx-auto bg-black/80 backdrop-blur-sm md:bg-transparent md:backdrop-blur-0 p-[0.1rem] rounded md:text-start">
						<h2 className="sr-only">Projects</h2>
						<h3 className="projectSection__subHeader">
							...pause to view some{" "}
							<span className="text-orange-500">projects</span>
						</h3>
					</div>
				}
			>
				{/* ============================== PROJECT BOARD */}
				<ProjectBoard items={projects} visibleCount={visibleCount} />
			</PageLayout>
			{/* ===================== GLOWING BOTTOM DIVIDER ===================== */}
			<div className="hidden md:block pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[2px] bg-gradient-to-r from-transparent via-orange-500/70 to-transparent shadow-[0_0_12px_rgba(255,165,0,0.7)]">
				{/* ===================== UPWARD GLOW ===================== */}
				<div className="absolute bottom-[4px] left-0 w-full h-[20px] bg-gradient-to-t from-orange-500/50 via-orange-500/20 to-transparent blur-[12px] opacity-80"></div>
			</div>
		</section>
	);
};

export default ProjectsSection;
