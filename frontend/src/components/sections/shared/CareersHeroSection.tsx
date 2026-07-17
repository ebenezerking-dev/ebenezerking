// src/components/sections/shared/CareerHero.tsx
// Reusable hero section for all career pages

// ================== IMPORTS
import { motion } from "framer-motion";
import { NAVBAR_HEIGHT } from "../../../constants/layout";
import type { Hero, Theme } from "../../../types/career";
import CareerHeroFrame from "../frames/shared/CareerHeroFrame";
import RippleButton from "../../reusables/others/RippleButton";
import TimeDate from "../../reusables/others/TimeDate";
import BottomDivider from "../../reusables/others/BottomDivider";
import {
	developerCareerImage,
	homepageHeroTitle,
	headerUnderline,
	heroSubTitle,
	heroButton,
	dateHero,
	viewportRepeat,
	viewportOnce,
} from "../../reusables/animations";

// ================== PROPS
type CareersHeroSectionProps = {
	hero: Hero;
	theme: Theme;
};

// ================== CAREER HERO
const CareersHeroSection = ({ hero, theme }: CareersHeroSectionProps) => {
	return (
		<CareerHeroFrame theme={theme} className="parent w-full">
			{/* ============================== HERO WRAPPER */}
			<div
				className="wrapper__theme relative overflow-hidden flex items-center justify-center w-full"
				style={{
					minHeight: `calc(100dvh - ${NAVBAR_HEIGHT}px)`,
					background: `linear-gradient(
						135deg,
						${theme.gradientFrom},
						${theme.gradientVia},
						${theme.gradientTo}
					)`,
				}}
			>
				{/* ====================== HERO CONTENT */}
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

						{/* ================= HERO HEADER */}
						<motion.div
							variants={homepageHeroTitle}
							initial="hidden"
							animate="visible"
							viewport={viewportOnce}
							className="relative z-10 px-4"
						>
							<div className="inline-block uppercase font-unna font-bold text-[1rem] bg-[#000000] p-3 rounded-2xl">
								<h2 className="relative inline-block">
									{hero.title}

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

						{/* ================= HERO BODY */}
						<div className="relative z-10 flex flex-col items-center justify-center gap-6 text-center">
							{/* SUBTITLE */}
							<motion.div
								variants={heroSubTitle}
								initial="hidden"
								animate="visible"
								className="relative inline-flex bg-[#000000]/90 px-6 py-3 rounded-2xl"
							>
								<h2 className="relative inline-block lg:text-4xl">
									{hero.subtitle}
								</h2>

								<span className="absolute w-1.5 left-3 top-1/2 -translate-y-1/2 h-8 bg-orange-500 rounded-full" />
								<span className="absolute w-1.5 right-3 top-1/2 -translate-y-1/2 h-8 bg-orange-500 rounded-full" />
							</motion.div>

							{/* DOWNLOAD BUTTON */}
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
						</div>

						{/* ================= HERO DATE */}
						<motion.div
							variants={dateHero}
							initial="hidden"
							animate="visible"
							className="relative z-10 w-full"
						>
							<TimeDate
								showTime={false}
								className="date text-1xl text-white text-end font-semibold hover:text-[#00FF91] transition-colors duration-300"
							/>
						</motion.div>
					</motion.div>
				</div>

				{/* ================= BOTTOM DIVIDER */}
				<BottomDivider />
			</div>
		</CareerHeroFrame>
	);
};

export default CareersHeroSection;
