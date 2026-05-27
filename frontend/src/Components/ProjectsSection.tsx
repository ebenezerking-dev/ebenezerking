// =====================================
// src/Components/ProjectsSection.tsx
// ===================================== PROJECTS SECTION COMPONENT
import ProjectBoard from "./Reusables/ProjectBoard";
import { useState, useEffect } from "react";

import Mobile from "../Assets/Projects/taxlator/images/Mobile.webp";
import Ipad from "../Assets/Projects/taxlator/images/iPad.webp";
import Macbook from "../Assets/Projects/taxlator/images/Macbook.webp";

import IncomingImage from "../Assets/Projects/incoming/incoming.png";

import SectionFrame from "./Reusables/SectionFrame";

const projects = [
	{
		images: {
			mobile: Mobile,
			tablet: Ipad,
			desktop: Macbook,
		},
		title: "Taxlator",
		description:
			"Your tax calculator app with real-time updates and calculations.",
		tech: [
			"React",
			"JavaScript",
			"TypeScript",
			"TailwindCSS",
			"Express.js",
			"Node.js",
			"MongoDB",
		],
		live: "https://taxlator-v2.vercel.app/",
		github: "https://github.com/ebenezerkingv2/taxlatorV2_frontend",
	},
	{
		images: {
			mobile: IncomingImage,
			tablet: IncomingImage,
			desktop: IncomingImage,
		},
		title: "velly",
		description: "An online fashion retail store you can own. coming soon!",
		tech: [
			"React",
			"JavaScript",
			"TypeScript",
			"TailwindCSS",
			"Express.js",
			"Node.js",
			"PostgreSQL",
		],
		live: "https://kingv2.vercel.app/",
		github: "https://github.com/ebenezerkingv2/kingv2",
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
		<SectionFrame className="projectSection__parent relative h-auto w-full flex flex-col bg-[#262628] md:bg-gradient-to-b from-[#22050c] via-[#ABE0F0] to-[#22050c] overflow-hidden">
			{/* ============================== SECTION WRAPPER */}
			<div className="projectSection__wrapper w-full md:w-[90%] lg:w-[70%] mx-auto px-4 pt-[2rem] pb-[4rem]">
				{/* ============================== CONTENT HEADER */}
				<div className="wrapper__header font-unna text-[1.1rem] text-center mb-[5rem]">
					<h2 className="sr-only projectSection__header">Projects</h2>

					<h3 className="header relative inline-block flex">
						Some{" "}
						<span className="text-orange-500 font-bold uppercase">
							projects
						</span>{" "}
						i built
						<span className="absolute left-1/2 -translate-x-1/2 bottom-[-0.2rem] h-[0.2rem] w-[30%] bg-red-500 rounded-full"></span>
					</h3>
				</div>

				{/* ============================== CONTENT */}
				<div className="content__paragraphs font-tinos flex flex-col justify-center gap-4 lg:gap-3 text-[1.3rem] w-full">
					{/* ============================== PROJECT BOARD */}
					<ProjectBoard items={projects} visibleCount={visibleCount} />
				</div>
			</div>

			{/* ===================== GLOWING BOTTOM DIVIDER ===================== */}
			<div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[2px] bg-gradient-to-r from-transparent via-orange-500 to-transparent shadow-[0_0_12px_rgba(255,165,0,0.7)]"></div>
		</SectionFrame>
	);
};

export default ProjectsSection;
