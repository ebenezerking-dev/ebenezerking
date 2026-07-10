// src/components/sections/AboutSection.tsx
// this is a section that renders the about data for a career page
// ================== IMPORTS
import DeveloperFrame from "./Frames/DeveloperFrame";
import { motion } from "framer-motion";
import type { About, Theme } from "../../types/career";
import {
	containerVariants,
	fadeInUpVariants,
	headerVariants,
	underlineVariants,
	dividerVariants,
	viewportRepeat,
} from "../reusables/animations";

// ================== PROPS
type AboutSectionProps = {
	about: About;
	theme: Theme;
};

// ================== ABOUT SECTION
const AboutSection = ({ about, theme }: AboutSectionProps) => {
	return (
		<DeveloperFrame id="about" theme={theme}>
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
							<h3 className="header relative inline-block">
								{about.title}

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
						{/* ============================== INTRO */}
						{about.intro && (
							<motion.p variants={fadeInUpVariants} className="font-bold">
								<span className="inline-block xl:inline">
									{about.intro.split(",").map((part, index, array) => (
										<span key={index}>
											<span className="uppercase text-orange-500 text-[2rem] font-bold">
												I
											</span>{" "}
											{part.trim()}
											{index < array.length - 1 ? "," : "."}{" "}
										</span>
									))}
								</span>
							</motion.p>
						)}

						{/* ============================== PARAGRAPHS */}
						{about.paragraphs.map((paragraph, index) => (
							<motion.p key={index} variants={fadeInUpVariants}>
								{paragraph}
							</motion.p>
						))}
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
		</DeveloperFrame>
	);
};

export default AboutSection;
