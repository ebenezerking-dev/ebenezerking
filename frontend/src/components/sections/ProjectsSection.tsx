// =====================================
// src/components/sections/ProjectsSection.tsx
// ===================================== PROJECTS SECTION COMPONENT
import ProjectBoard from "../reusables/ProjectBoard";
import SectionFrame from "../reusables/SectionFrame";
import { motion } from "framer-motion";
import {
	containerVariants,
	headerVariants,
	underlineVariants,
	dividerVariants,
	viewportRepeat,
} from "../reusables/animations/sectionAnimations";

import MobileT from "../../Assets/Projects/taxlator/images/Mobile.webp";
import IpadT from "../../Assets/Projects/taxlator/images/iPad.webp";
import MacbookT from "../../Assets/Projects/taxlator/images/Macbook.webp";

import Macbook from "../../Assets/Projects/incoming/Macbook.webp";
import Ipad from "../../Assets/Projects/incoming/iPad.webp";
import Mobile from "../../Assets/Projects/incoming/iPhone.webp";

// =====================================
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
		<SectionFrame>
			<motion.div
				initial="hidden"
				whileInView="visible"
				viewport={viewportRepeat}
				className="projectSection__parent relative h-auto w-full flex flex-col overflow-hidden"
			>
				{/* ============================== SECTION WRAPPER */}
				<motion.div
					variants={containerVariants}
					className="projectSection__wrapper w-full md:w-[90%] lg:w-[70%] mx-auto"
				>
					{/* ============================== CONTENT HEADER */}
					<motion.div variants={headerVariants} className="text-left px-4">
						<div className="wrapper__header inline-block uppercase font-unna font-bold text-[1rem] mb-56 bg-[#000000] p-3 rounded-2xl">
							<h2 className="sr-only projectSection__header">Projects</h2>
							<h3 className="header relative inline-block">
								Some projects i built.
								<motion.span
									variants={underlineVariants}
									initial="hidden"
									whileInView="visible"
									viewport={viewportRepeat}
									className="absolute left-1/2 -translate-x-1/2 bottom-[-0.2rem] h-[0.2rem] w-[30%] bg-orange-500 rounded-full"
								></motion.span>
							</h3>
						</div>
					</motion.div>

					{/* ============================== CONTENT */}
					<motion.div className="content__paragraphs flex flex-col justify-center px-2 gap-4 lg:gap-3 w-full pb-20">
						{/* ============================== PROJECT BOARD */}
						<ProjectBoard items={projects} />
					</motion.div>
				</motion.div>

				{/* ===================== GLOWING BOTTOM DIVIDER ===================== */}
				<motion.div
					variants={dividerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: false, amount: 0.2 }}
					className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-0.5 bg-linear-to-r from-transparent via-orange-500 to-transparent origin-left"
				/>
			</motion.div>
		</SectionFrame>
	);
};

export default ProjectsSection;
