// src/components/sections/developer/ExperienceSection.tsx
// this is a section that renders the experience data for a career page
// ================== IMPORTS
import CareerSectionFrame from "../frames/shared/CareerSectionFrame";
import { motion } from "framer-motion";
import type { ExperienceData, Theme } from "../../../types/career";
import {
	viewportRepeat,
	developer,
	header,
	headerUnderline,
	developerBody,
	fadeUpThree,
	bottomDivider,
} from "../../reusables/animations/developerSc";

// ================== PROPS
type ExperienceSectionProps = {
	experience: ExperienceData;
	theme: Theme;
};

// ================== EXPERIENCE SECTION
const ExperienceSection = ({ experience, theme }: ExperienceSectionProps) => {
	return (
		<CareerSectionFrame id="experience" theme={theme}>
			<motion.div
				variants={developer}
				initial="hidden"
				whileInView="visible"
				viewport={viewportRepeat}
				className="parent relative h-auto w-full flex flex-col overflow-hidden px-4"
			>
				{/* ============================== EXPERIENCE WRAPPER */}
				<motion.div className="wrapper w-full md:w-[90%] lg:w-[70%] mx-auto pb-20">
					{/* ============================== EXPERIENCE HEADER */}
					<motion.div variants={header} className="header text-left px-4">
						<div className="header inline-block uppercase font-unna font-bold text-[1rem] mb-56 bg-[#000000] p-3 rounded-2xl">
							<h2 className="relative inline-block">
								{experience.title}
								<motion.span
									variants={headerUnderline}
									initial="hidden"
									whileInView="visible"
									viewport={viewportRepeat}
									className="absolute left-1/2 -translate-x-1/2 bottom-[-0.2rem] h-[0.2rem] w-[30%] bg-orange-500 rounded-full"
								/>
							</h2>
						</div>
					</motion.div>
					{/* ============================== EXPERIENCE BODY */}
					<motion.div
						variants={developerBody}
						className="body flex flex-col gap-8 w-full md:p-4 text-lg"
					>
						{experience.items.map((item) => (
							<div
								key={`${item.company}-${item.role}`}
								className="w-full max-w-2xl mx-auto"
							>
								{/* ========== COMPANY */}
								<motion.div
									variants={headerVariants}
									className="flex justify-center"
								>
									<div className="relative z-10 inline-flex bg-[#000000] px-3 pt-1 pb-3 rounded-2xl">
										<h3 className="relative inline-block">
											{item.company}
											<span className="absolute w-[30%] left-1/2 -translate-x-1/2 bottom-[-0.2rem] h-[0.2rem] bg-orange-500 rounded-full" />
										</h3>
									</div>
								</motion.div>

								{/* ========== ROLE */}
								<motion.p
									variants={fadeInUpVariants}
									className="mt-4 font-semibold"
								>
									{item.role}
								</motion.p>

								{/* ========== DURATION */}
								<motion.p
									variants={fadeInUpVariants}
									className="text-sm text-white/70 mb-4"
								>
									{item.duration}
								</motion.p>

								{/* ========== DESCRIPTION */}
								<motion.ul
									variants={fadeInUpVariants}
									className="list-disc pl-5 space-y-2"
								>
									{item.description.map((desc) => (
										<li key={desc}>{desc}</li>
									))}
								</motion.ul>
							</div>
						))}
					</motion.div>
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
		</CareerSectionFrame>
	);
};

export default ExperienceSection;
