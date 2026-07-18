// src/components/sections/shared/CareersHeroSection.tsx
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
	video1,
	video2,
	video3,
} from "../../reusables/animations";

// ================== PROPS
type CareersHeroSectionProps = {
	hero: Hero;
	theme: Theme;
};

// ================== CAREER HERO
const CareersHeroSection = ({ hero, theme }: CareersHeroSectionProps) => {
	const cols = hero.heroMedia.length;

	const animationVariants = [video1, video2, video3];
	const overlays = ["bg-black/2", "bg-black/2", "bg-black/2"];
	const playbackRates = [0.6, 0.6, 0.6];
	const scales = ["scale-100", "scale-150", "scale-100"];

	return (
		<CareerHeroFrame theme={theme} className="parent w-full">
			{/* ============================== HERO WRAPPER */}
			<div
				className="wrapper__theme relative flex w-full items-center justify-center overflow-hidden"
				style={{
					minHeight: `calc(100dvh - ${NAVBAR_HEIGHT}px)`,
					background: `linear-gradient(
						${theme.gradientAngle},
						${theme.gradientFrom},
						${theme.gradientVia},
						${theme.gradientTo}
					)`,
				}}
			>
				{/* ====================== HERO CONTENT */}
				<div className="wrapper__backgroundImage h-150 w-[90%] rounded-4xl lg:w-[70%]">
					<motion.div
						variants={developerCareerImage}
						initial="hidden"
						animate="visible"
						className="relative flex h-full w-full flex-col items-center justify-between overflow-hidden rounded-tl-sm rounded-tr-[5rem] rounded-bl-[5rem] rounded-br-sm"
					>
						{/* ====================== HERO MEDIA */}
						<div
							className="absolute inset-0 grid"
							style={{
								gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
							}}
						>
							{hero.heroMedia.map((media, index) => (
								<motion.div
									key={index}
									variants={animationVariants[index % animationVariants.length]}
									initial="hidden"
									animate="visible"
									className="relative h-full w-full overflow-hidden"
								>
									{/* ====================== HERO VIDEO OR IMAGE */}
									{media.type === "video" ? (
										<video
											className={`h-full w-full object-cover ${
												scales[index % scales.length]
											}`}
											autoPlay
											muted
											loop
											playsInline
											ref={(el) => {
												if (el) {
													el.playbackRate =
														playbackRates[index % playbackRates.length];
												}
											}}
										>
											<source src={media.src} type="video/mp4" />
										</video>
									) : (
										<div className="flex h-full w-full items-start justify-center overflow-hidden">
											<img
												src={media.src}
												alt={hero.title}
												className={`max-h-full w-full object-contain ${
													scales[index % scales.length]
												}`}
											/>
										</div>
									)}

									<div
										className={`absolute inset-0 ${
											overlays[index % overlays.length]
										}`}
									/>
								</motion.div>
							))}
						</div>

						{/* ================= HERO HEADER */}
						<motion.div
							variants={homepageHeroTitle}
							initial="hidden"
							animate="visible"
							viewport={viewportOnce}
							className="relative z-10 px-4"
						>
							<div className="inline-block rounded-2xl bg-black p-3 font-unna text-[1rem] font-bold uppercase">
								<h2 className="relative inline-block">
									{hero.title}

									<motion.span
										variants={headerUnderline}
										initial="hidden"
										whileInView="visible"
										viewport={viewportRepeat}
										className="absolute bottom-[-0.2rem] left-1/2 h-[0.2rem] w-[30%] -translate-x-1/2 rounded-full"
										style={{ backgroundColor: theme.underline }}
									/>
								</h2>
							</div>
						</motion.div>

						{/* ================= HERO BODY */}
						<div className="relative z-10 flex flex-col items-center justify-center gap-6 text-center">
							{/* ================= SUBTITLE */}
							<motion.div
								variants={heroSubTitle}
								initial="hidden"
								animate="visible"
								className="relative inline-flex rounded-2xl bg-black px-4 py-1"
							>
								<h2 className="relative inline-block text-lg lg:text-2xl">
									{hero.subtitle}
								</h2>

								<span
									className="absolute left-0 top-1/2 h-full w-1.5 -translate-y-1/2 rounded-full"
									style={{ backgroundColor: theme.underline }}
								/>
								<span
									className="absolute right-0 top-1/2 h-full w-1.5 -translate-y-1/2 rounded-full"
									style={{ backgroundColor: theme.underline }}
								/>
							</motion.div>

							{/* ================= DOWNLOAD BUTTON */}
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
								className="date text-1xl text-end font-semibold text-white transition-colors duration-300 hover:text-[#00FF91]"
							/>
						</motion.div>
					</motion.div>
				</div>

				{/* ================= BOTTOM DIVIDER */}
				<BottomDivider theme={theme} />
			</div>
		</CareerHeroFrame>
	);
};

export default CareersHeroSection;
