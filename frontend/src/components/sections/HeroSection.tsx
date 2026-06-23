// =====================================
// src/components/sections/HeroSection.tsx
// ===================================== HOME SECTION COMPONENT
import King from "../../Assets/profilePic/kingAnimePp.webp";
import kingAnime from "../../Assets/backgroundImage/kingAnimePortrait.webp";
import { motion } from "framer-motion";
import TimeDate from "../reusables/TimeDate";
import {
	heroContainerVariants,
	heroTitleVariants,
	mobileHeroVariants,
} from "../reusables/animations/sectionAnimations";

const HeroSection = () => {
	return (
		<section className="heroSection__parent w-full">
			<div className="heroSection__wrapper">
				{/* ============================== SMALL SCREENS */}
				<div className="smallScreens relative md:hidden w-full h-dvh overflow-hidden">
					<img
						src={kingAnime}
						alt="Background"
						className="absolute inset-0 w-full h-full object-cover object-center z-0 scale-200 sm:scale-100 origin-top"
					/>
					<div className="relative z-10 flex items-center justify-center w-full h-full">
						<motion.h1
							initial="hidden"
							animate="visible"
							whileInView="visible"
							variants={mobileHeroVariants}
							className="bg-[#000000]/30 text-2xl font-unna font-bold uppercase border-t-12 border-b-12 border-orange-500 rounded-2xl hover:bg-[#000000] hover:border-[#00ff91] transition duration-300 p-4 cursor-pointer"
						>
							<a
								href="https://docs.google.com/document/d/1rMZx8aLk1ZitCwSRTK706o19mj5UgyeQGABCZt6eAJg/edit?usp=sharing"
								target="_blank"
								rel="noopener noreferrer"
							>
								full-stack Developer
							</a>
							<TimeDate
								showTime={false}
								className="timeDate text-[1rem] mx-auto font-semibold"
							/>
						</motion.h1>
					</div>
				</div>

				{/* ============================== MEDIUM AND LARGE SCREENS */}
				<div className="hidden md:block relative bg-[linear-gradient(135deg,#020617,#000AFD,#020617)] overflow-hidden w-full min-h-screen">
					<div className="min-h-[calc(100vh-var(--navbar-height))] w-[90%] lg:w-[70%] mx-auto flex items-center justify-center">
						<motion.div
							className="parent w-full h-full flex items-center shrink-0"
							initial={{ opacity: 0, scale: 0.5 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.9, ease: "easeOut" }}
						>
							<div className="relative w-full h-120 flex items-end mt-20">
								{/* ================= HERO CONTENT */}
								<motion.div
									variants={heroContainerVariants}
									initial="hidden"
									animate="visible"
									className="parent__content absolute z-10 p-2 cursor-pointer group"
								>
									<motion.div
										variants={heroTitleVariants}
										className="text-left"
									>
										<h1 className="flex flex-col font-unna font-bold uppercase bg-linear-to-b from-black via-white to-black text-transparent bg-clip-text drop-shadow-[6px_0_0_#f97316] group-hover:drop-shadow-[6px_0_0_#00FF91] transition-all duration-300">
											<a
												href="https://www.w3schools.com/whatis/whatis_fullstack.asp"
												target="_blank"
												rel="noopener noreferrer"
												className="flex flex-col"
											>
												<span className="text-8xl">Full-Stack</span>
												<span className="text-9xl">Developer</span>
											</a>
										</h1>
										<motion.div
											initial={{ opacity: 0 }}
											animate={{ opacity: 1 }}
											transition={{ delay: 0.9, duration: 0.9 }}
										>
											<TimeDate
												showTime={false}
												className="timeDate text-[1.5rem] text-white mx-auto font-semibold group-hover:text-[#00FF91] transition-colors duration-300"
											/>
										</motion.div>
									</motion.div>
								</motion.div>

								{/* ============= HERO DEV IMAGE */}
								<div className="parent__image absolute z-0 -top-8 right-0 w-92">
									<motion.a
										href="https://docs.google.com/document/d/1rMZx8aLk1ZitCwSRTK706o19mj5UgyeQGABCZt6eAJg/edit?usp=sharing"
										target="_blank"
										rel="noopener noreferrer"
										className="relative z-20 w-full h-full overflow-hidden group block"
										initial={{ opacity: 0, x: 100, scale: 0.9 }}
										animate={{ opacity: 1, x: 0, scale: 1 }}
										transition={{
											duration: 0.9,
											ease: [0.25, 0.1, 0.25, 1],
											delay: 0.9,
										}}
										whileHover={{
											y: -8,
											scale: 1.02,
											transition: { duration: 0.2, ease: [0.25, 0.1, 0.25, 1] },
										}}
									>
										<img
											src={King}
											alt="King"
											className="object-cover w-full h-auto scale-x-[-1] rounded-br-[5rem] border-b-6 border-orange-500 group-hover:border-[#00ff91] transition-all duration-500"
										/>
									</motion.a>
								</div>
							</div>
						</motion.div>
					</div>
					{/* ===================== GLOWING BOTTOM DIVIDER ===================== */}
					<div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-0.5 bg-linear-to-r from-transparent via-[#000AFD] to-transparent"></div>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
