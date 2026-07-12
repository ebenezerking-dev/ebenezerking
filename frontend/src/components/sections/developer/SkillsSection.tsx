// src/components/sections/developer/SkillsSection.tsx
// this is a section that renders the skills data for a career page

// ================== IMPORTS
import { motion } from "framer-motion";
import DeveloperFrame from "../frames/developer/DeveloperFrame";
import type { SkillsData, Theme } from "../../../types/career";
import {
	sectionContainerVariants,
	headerVariants,
	underlineVariants,
	viewportRepeat,
	dividerVariants,
	cardContainerVariants,
	getCardVariants,
} from "../../reusables/animations";

// ================== PROPS
type SkillsSectionProps = {
	skills: SkillsData;
	theme: Theme;
};

// ================== SKILLS SECTION
const SkillsSection = ({ skills, theme }: SkillsSectionProps) => {
	return (
		<DeveloperFrame id="skills" theme={theme}>
			<motion.div
				initial="hidden"
				whileInView="visible"
				viewport={viewportRepeat}
				className="parent relative flex w-full flex-col overflow-hidden px-4"
			>
				{/* ============================== SKILLS WRAPPER */}
				<motion.div
					variants={sectionContainerVariants}
					className="wrapper w-full md:w-[90%] lg:w-[70%] mx-auto pb-20"
				>
					{/* ============================== SKILLS HEADER */}
					<motion.div
						variants={headerVariants}
						className="header text-left px-4"
					>
						<div className="inline-block rounded-2xl bg-[#000000] p-3 font-unna text-[1rem] font-bold uppercase mb-56">
							<h2 className="relative inline-block">
								{skills.title}
								<motion.span
									variants={underlineVariants}
									className="absolute left-1/2 bottom-[-0.2rem] h-[0.2rem] w-[30%] -translate-x-1/2 rounded-full bg-orange-500"
								/>
							</h2>
						</div>
					</motion.div>

					{/* ============================== SKILLS BODY */}
					<motion.div
						variants={cardContainerVariants(0.08)}
						initial="hidden"
						whileInView="visible"
						viewport={viewportRepeat}
						className="body grid grid-cols-2 gap-4 px-4 pb-20 sm:grid-cols-3 lg:grid-cols-4"
					>
						{/* ============================== SKILLS GRID */}
						{skills.items.map((skill) => {
							const Icon = skill.icon;

							return (
								<motion.div
									key={skill.name}
									variants={getCardVariants("scale")}
									whileHover={{
										y: -5,
										scale: 1.02,
										transition: {
											duration: 0.2,
											ease: "easeOut",
										},
									}}
									className="flex flex-col items-center justify-center rounded-xl border border-[#000AFD]/80 bg-[#000000]/20 px-4 py-6 text-center transition-all duration-300 hover:border-[#00FF91] hover:bg-[#000000] hover:text-[#00FF91]"
								>
									{Icon && (
										<Icon className="mb-3 text-3xl" />
									)}
									<h3 className="font-unna text-xl">{skill.name}</h3>
								</motion.div>
							);
						})}
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
		</DeveloperFrame>
	);
};

export default SkillsSection;
