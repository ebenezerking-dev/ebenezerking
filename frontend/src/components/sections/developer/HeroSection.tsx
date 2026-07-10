// src/components/sections/developer/HeroSection.tsx
// this is a section that renders the hero data for a career page
// ================== IMPORTS
import { motion } from "framer-motion";
import TimeDate from "../../reusables/TimeDate";
import type { Hero, Theme } from "../../../types/career";
import {
	developerHeroImageVariants,
	heroTitleVariants,
	heroSubTitleVariants,
	heroDateVariants,
} from "../../reusables/animations";

// ================== PROPS
type HeroSectionProps = {
	hero: Hero;
	theme: Theme;
};

// ================== HERO SECTION
const HeroSection = ({ hero, theme }: HeroSectionProps) => {
	return (
		<section className="heroSection__parent w-full">
			{/* ============================== SMALL SCREENS */}

			{/* ============================== MEDIUM AND LARGE SCREENS */}
			<div
				className="heroSection__wrapper min-h-[calc(100vh-var(--navbar-height))] relative overflow-hidden w-full"
				style={{
					background: `linear-gradient(135deg, ${theme.gradientFrom}, ${theme.gradientVia}, ${theme.gradientTo}
						)`,
				}}
			>
				{/* ====================== HERO CONTENT BODY */}
				<div className="parent h-150 w-[90%] lg:w-[70%] mx-auto mt-40 md:mt-50 lg:mt-14 rounded-4xl">
					<motion.div
						variants={developerHeroImageVariants}
						initial="hidden"
						animate="visible"
						className="relative w-full h-full bg-cover bg-center flex flex-col items-center justify-between rounded-tl-[5rem] rounded-tr-[5rem] rounded-bl-[5rem]"
						style={{
							backgroundImage: `url(${hero.heroImage})`,
						}}
					>
						{/* ================= OVERLAY */}
						<div className="absolute inset-0 bg-black/20 rounded-tl-[5rem] rounded-tr-[5rem] rounded-bl-[5rem]" />
						{/* ======================== HERO HEADER */}
						<motion.div
							variants={heroTitleVariants}
							initial="hidden"
							animate="visible"
							className="relative z-10 inline-flex bg-[#000000] px-3 pt-1 pb-3 rounded-2xl"
						>
							<h1 className="relative inline-block">
								{hero.title}
								<span className="absolute w-[30%] left-1/2 -translate-x-1/2 bottom-[-0.2rem] h-[0.2rem] bg-orange-500 rounded-full" />
							</h1>
						</motion.div>
						{/* ======================== HERO BODY */}
						<motion.div
							variants={heroSubTitleVariants}
							initial="hidden"
							animate="visible"
							className="relative z-10 inline-flex bg-[#000000]/90 px-6 py-3 rounded-2xl"
						>
							<h2 className="relative inline-block lg:text-4xl">
								{hero.subtitle}
							</h2>
							<span className="absolute w-1.5 left-3 top-1/2 -translate-y-1/2 h-8 bg-orange-500 rounded-full" />
							<span className="absolute w-1.5 right-3 top-1/2 -translate-y-1/2 h-8 bg-orange-500 rounded-full" />
						</motion.div>

						{/* ======================= HERO TIME DATE */}
						<motion.div
							variants={heroDateVariants}
							initial="hidden"
							animate="visible"
							className="relative z-10 w-full"
						>
							<TimeDate
								showTime={false}
								className="timeDate text-1xl text-white text-end font-semibold hover:text-[#00FF91] transition-colors duration-300"
							/>
						</motion.div>
					</motion.div>
				</div>
				{/* ===================== GLOWING BOTTOM DIVIDER ===================== */}
				<div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-0.5 bg-linear-to-r from-transparent via-[#000AFD] to-transparent"></div>
			</div>
		</section>
	);
};

export default HeroSection;
