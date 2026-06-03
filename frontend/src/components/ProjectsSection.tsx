// =====================================
// src/Components/ProjectsSection.tsx
// ===================================== PROJECTS SECTION COMPONENT
import ProjectBoard from "../components/reusables/ProjectBoard";
import SectionFrame from "../components/reusables/SectionFrame";

import MobileT from "../Assets/Projects/taxlator/images/Mobile.webp";
import IpadT from "../Assets/Projects/taxlator/images/iPad.webp";
import MacbookT from "../Assets/Projects/taxlator/images/Macbook.webp";

import Macbook from "../Assets/Projects/incoming/Macbook.webp";
import Ipad from "../Assets/Projects/incoming/iPad.webp";
import Mobile from "../Assets/Projects/incoming/iPhone.webp";

const projects = [
	{
		images: {
			mobile: MobileT,
			tablet: IpadT,
			desktop: MacbookT,
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
			mobile: Mobile,
			tablet: Ipad,
			desktop: Macbook,
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
	return (
		<SectionFrame className="projectSection__parent relative h-auto w-full flex flex-col bg-gradient-to-b from-[#00485d] from-0% via-[#8ad6ed] via-50% to-[#00485d] to-100% overflow-hidden">
			{/* ============================== SECTION WRAPPER */}
			<div className="projectSection__wrapper w-full md:w-[90%] lg:w-[70%] mx-auto">
				{/* ============================== CONTENT HEADER */}
				<div className="wrapper__header uppercase font-unna font-bold text-[1rem] text-center mb-[16rem]">
					<h2 className="sr-only projectSection__header">Projects</h2>

					<h3 className="header relative inline-block flex">
						Some projects i built.
						<span className="absolute left-1/2 -translate-x-1/2 bottom-[-0.2rem] h-[0.2rem] w-[30%] bg-orange-500 rounded-full"></span>
					</h3>
				</div>

				{/* ============================== CONTENT */}
				<div className="content__paragraphs flex flex-col justify-center gap-4 lg:gap-3 text-[#22050c] w-full">
					{/* ============================== PROJECT BOARD */}
					<ProjectBoard items={projects} />
				</div>
			</div>

			{/* ===================== GLOWING BOTTOM DIVIDER ===================== */}
			<div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[2px] bg-gradient-to-r from-transparent via-orange-500 to-transparent shadow-[0_0_12px_rgba(255,165,0,0.7)]"></div>
		</SectionFrame>
	);
};

export default ProjectsSection;
