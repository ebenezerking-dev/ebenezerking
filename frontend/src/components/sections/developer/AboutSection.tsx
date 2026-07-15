// src/components/sections/developer/AboutSection.tsx
// this is a section that renders the about data for a career page
// ================== IMPORTS
import CareerSectionFrame from "../frames/shared/CareerSectionFrame";
import { motion } from "framer-motion";
import type { About, Theme } from "../../../types/career";
import {
	viewportRepeat,
	headerContainer,
	header,
	headerUnderline,
	bodyContainer,
	fadeUpThree,
	bottomDivider,
} from "../../reusables/animations/developerSc";

// ================== PROPS
type AboutSectionProps = {
	about: About;
	theme: Theme;
};

// ================== ABOUT SECTION
const AboutSection = ({ about, theme }: AboutSectionProps) => {
	return (
		<CareerSectionFrame id="about" theme={theme}>
			<motion.div
				variants={headerContainer}
				initial="hidden"
				whileInView="visible"
				viewport={viewportRepeat}
				className="parent relative h-auto w-full flex flex-col overflow-hidden px-4"
			>
				{/* ============================== ABOUT WRAPPER */}
				<motion.div className="wrapper w-full md:w-[90%] lg:w-[70%] mx-auto pb-20">
					{/* ============================== ABOUT HEADER */}
					<motion.div variants={header} className="header text-left px-4">
						<div className="inline-block uppercase font-unna font-bold text-[1rem] mb-56 bg-[#000000] p-3 rounded-2xl">
							<h3 className="header relative inline-block">
								{about.title}
								<motion.span
									variants={headerUnderline}
									initial="hidden"
									whileInView="visible"
									viewport={viewportRepeat}
									className="absolute left-1/2 -translate-x-1/2 bottom-[-0.2rem] h-[0.2rem] bg-orange-500 rounded-full"
								/>
							</h3>
						</div>
					</motion.div>

					{/* ============================== ABOUT BODY */}
					<motion.div
						variants={bodyContainer}
						className="body flex flex-col justify-center gap-4 lg:gap-3 w-full md:p-4 text-lg"
					>
						{/* ============================== ABOUT INTRO */}
						{about.intro && (
							<motion.p variants={fadeUpThree} className="font-bold">
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
							<motion.p key={index} variants={fadeUpThree}>
								{paragraph}
							</motion.p>
						))}
					</motion.div>
				</motion.div>

				{/* ===================== GLOWING BOTTOM DIVIDER ===================== */}
				<motion.div
					variants={bottomDivider}
					initial="hidden"
					whileInView="visible"
					viewport={viewportRepeat}
					className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-0.5 bg-linear-to-r from-transparent via-orange-500 to-transparent origin-left"
				/>
			</motion.div>
		</CareerSectionFrame>
	);
};

export default AboutSection;
