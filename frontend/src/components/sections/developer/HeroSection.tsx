// src/components/sections/developer/HeroSection.tsx
// this is a section that renders the hero data for a career page
// ================== IMPORTS
import { motion } from "framer-motion";
import { NAVBAR_HEIGHT } from "../../../constants/layout";
import TimeDate from "../../reusables/others/TimeDate";
import CareerHeroFrame from "../frames/shared/CareerHeroFrame";
import type { Hero, Theme } from "../../../types/career";
import RippleButton from "../../reusables/others/RippleButton";
import {
	homepageHeroTitle,
	heroSubTitle,
	developerCareerImage,
	dateHero,
	heroButton,
	viewportOnce,
	bottomDivider,
} from "../../reusables/animations/developerSc";

// ================== PROPS
type HeroSectionProps = {
	hero: Hero;
	theme: Theme;
};

// ================== HERO SECTION
const HeroSection = ({ hero, theme }: HeroSectionProps) => {
	return (
		<CareerHeroFrame theme={theme} className="parent w-full">
			{/* ============================== HERO WRAPPER */}
			<div
				className="wrapper__theme relative overflow-hidden flex items-center justify-center w-full"
				style={{
					minHeight: `calc(100dvh - ${NAVBAR_HEIGHT}px)`,
					background: `linear-gradient(135deg, ${theme.gradientFrom}, ${theme.gradientVia}, ${theme.gradientTo}
						)`,
				}}
			>
				{/* ====================== HERO CONTENT BODY */}
				<div className="wrapper__backgroundImage h-150 w-[90%] lg:w-[70%] rounded-4xl">
					<motion.div
						variants={developerCareerImage}
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
							variants={homepageHeroTitle}
							initial="hidden"
							animate="visible"
							className="header relative z-10 inline-flex bg-[#000000] px-3 pt-1 pb-3 rounded-2xl"
						>
							<h1 className="relative inline-block">
								{hero.title}
								<span className="absolute w-[30%] left-1/2 -translate-x-1/2 bottom-[-0.2rem] h-[0.2rem] bg-orange-500 rounded-full" />
							</h1>
						</motion.div>
						{/* ======================== HERO BODY */}
						<motion.div className="body__wrapper w-full flex flex-col items-center justify-center gap-6 text-center">
							<motion.div
								variants={heroSubTitle}
								initial="hidden"
								animate="visible"
								className="body__subtitle relative z-10 inline-flex bg-[#000000]/90 px-6 py-3 rounded-2xl"
							>
								<h2 className="relative inline-block lg:text-4xl">
									{hero.subtitle}
								</h2>
								<span className="absolute w-1.5 left-3 top-1/2 -translate-y-1/2 h-8 bg-orange-500 rounded-full" />
								<span className="absolute w-1.5 right-3 top-1/2 -translate-y-1/2 h-8 bg-orange-500 rounded-full" />
							</motion.div>
							{/* ======================= DOWNLOAD RESUME BUTTON */}
							<motion.div
								variants={heroButton}
								initial="hidden"
								animate="visible"
							>
								<RippleButton
									href={hero.button.href}
									download={hero.button.download}
								>
									{hero.button.label}
								</RippleButton>
							</motion.div>
						</motion.div>

						{/* ======================= HERO DATE */}
						<motion.div
							variants={dateHero}
							initial="hidden"
							animate="visible"
							className="dateWrapper relative z-10 w-full"
						>
							<TimeDate
								showTime={false}
								className="date text-1xl text-white text-end font-semibold hover:text-[#00FF91] transition-colors duration-300"
							/>
						</motion.div>
					</motion.div>
				</div>
				{/* ===================== GLOWING BOTTOM DIVIDER ===================== */}
				<motion.div
					variants={bottomDivider}
					initial="hidden"
					whileInView="visible"
					viewport={viewportOnce}
					className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-1.5 bg-linear-to-r from-transparent via-orange-500 to-transparent"
				/>
			</div>
		</CareerHeroFrame>
	);
};

export default HeroSection;
