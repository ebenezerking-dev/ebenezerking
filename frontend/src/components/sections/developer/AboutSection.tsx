// src/components/sections/developer/AboutSection.tsx
// this is a section that renders the about data for a career page
// ================== IMPORTS
import CareerSectionFrame from "../frames/shared/CareerSectionFrame";
import { motion } from "framer-motion";
import type { About, Theme } from "../../../types/career";
import SectionHeader from "../../reusables/others/SectionHeader";
import BottomDivider from "../../reusables/others/BottomDivider";
import {
	viewportRepeat,
	developer,
	developerBody,
	paragraphUp,
} from "../../reusables/animations";

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
				variants={developer}
				initial="hidden"
				whileInView="visible"
				viewport={viewportRepeat}
				className="parent relative h-auto w-full flex flex-col overflow-hidden px-4"
			>
				{/* ============================== ABOUT WRAPPER */}
				<motion.div className="wrapper w-full md:w-[90%] lg:w-[70%] mx-auto pb-20">
					{/* === */}
					{/* ============================== ABOUT HEADER */}
					<SectionHeader title={about.title} theme={theme} />

					{/* ============================== ABOUT BODY */}
					<motion.div
						variants={developerBody}
						className="body flex flex-col justify-center gap-4 lg:gap-3 w-full md:p-4 text-lg"
					>
						{/* ============================== ABOUT INTRO */}
						{about.intro && (
							<motion.p
								variants={paragraphUp}
								initial="hidden"
								whileInView="visible"
								viewport={viewportRepeat}
								className="font-bold"
							>
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
							<motion.p
								key={index}
								variants={paragraphUp}
								initial="hidden"
								whileInView="visible"
								viewport={viewportRepeat}
							>
								{paragraph}
							</motion.p>
						))}
					</motion.div>
				</motion.div>

				{/* ===================== GLOWING BOTTOM DIVIDER ===================== */}
				<BottomDivider theme={theme} />
			</motion.div>
		</CareerSectionFrame>
	);
};

export default AboutSection;
