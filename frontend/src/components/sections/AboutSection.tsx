// =====================================
// src/components/section/AboutSection.tsx
// ===================================== ABOUT SECTION COMPONENT
import SectionFrame from "../reusables/SectionFrame";
import { motion } from "framer-motion";
import {
	containerVariants,
	itemVariants,
	headerVariants,
	underlineVariants,
	dividerVariants,
	viewportRepeat,
} from "../reusables/animations/sectionAnimations";

// ===================================== COMPONENT
const AboutSection = () => {
	return (
		<SectionFrame>
			<motion.div
				initial="hidden"
				whileInView="visible"
				viewport={viewportRepeat}
				className="aboutSection__parent relative h-auto w-full flex flex-col overflow-hidden px-4"
			>
				{/* ============================== SECTION WRAPPER */}
				<motion.div
					variants={containerVariants}
					className="aboutSection__wrapper w-full md:w-[90%] lg:w-[70%] mx-auto pb-20"
				>
					{/* ============================== CONTENT HEADER */}
					<motion.div variants={headerVariants} className="text-left">
						<div className="wrapper__header inline-block uppercase font-unna font-bold text-[1rem] mb-56 bg-[#000000] p-3 rounded-2xl">
							<h2 className="sr-only aboutSection__header">About Me</h2>
							<h3 className="header relative inline-block">
								I am Ebenezer King.
								<motion.span
									variants={underlineVariants}
									initial="hidden"
									whileInView="visible"
									viewport={viewportRepeat}
									className="absolute left-1/2 -translate-x-1/2 bottom-[-0.2rem] h-[0.2rem] bg-orange-500 rounded-full"
								/>
							</h3>
						</div>
					</motion.div>

					{/* ============================== CONTENT */}
					<motion.div
						variants={containerVariants}
						className="content__paragraphs flex flex-col justify-center gap-4 lg:gap-3 w-full md:p-4 text-lg"
					>
						<motion.p variants={itemVariants} className="font-bold">
							<span className="inline-block xl:inline">
								<span className="uppercase text-orange-500 text-[2rem] font-bold">
									I
								</span>{" "}
								think,
								<span className="uppercase text-orange-500 text-[2rem] font-bold">
									{" "}
									I
								</span>{" "}
								visualise,
								<span className="uppercase text-orange-500 text-[2rem] font-bold">
									{" "}
									I
								</span>{" "}
								code.
							</span>
						</motion.p>

						<motion.p variants={itemVariants}>
							I turn my ideas into modern digital experiences by combining
							thoughtful design, clean code architecture, and problem-solving to
							build products people enjoy using.
						</motion.p>

						<motion.p variants={itemVariants}>
							From responsive front-end interfaces to scalable backend systems,
							I build and manage full-stack web applications focused on
							performance, usability, and real business impact.
						</motion.p>

						<motion.p variants={itemVariants}>
							I also strive well in a collaborative team setting, brainstorming
							creative solutions, and bringing projects to life with attention
							to detail and user experience.
						</motion.p>
					</motion.div>
				</motion.div>

				{/* ===================== GLOWING BOTTOM DIVIDER ===================== */}
				<motion.div
					variants={dividerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={viewportRepeat}
					className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-0.5 bg-linear-to-r from-transparent via-orange-500 to-transparent origin-left"
				/>
			</motion.div>
		</SectionFrame>
	);
};

export default AboutSection;
