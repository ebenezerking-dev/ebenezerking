// =====================================
// src/Components/HomeSection.tsx
// ===================================== HOME SECTION COMPONENT
import Kingv2 from "../Assets/profilePic/kingAnimePp.webp";
import king from "../Assets/backgroundImage/kingAnimePortrait.webp";
import { motion } from "framer-motion";
import TimeDate from "./reusables/TimeDate";

// =====================================
const springZoom = {
	initial: { opacity: 0, scale: 0.5 },
	animate: { opacity: 1, scale: 1 },
	transition: {
		type: "spring" as const,
		stiffness: 40,
		damping: 15,
	},
};

const HeroSection = () => {
	return (
		<section className="heroSection__parent w-full flex flex-col flex-grow">
			<div className="heroSection__wrapper">
				{/* ============================== MP4 MUSIC */}

				{/* ========================================================================== */}
				{/* ============================== SMALL SCREENS */}
				<div className="smallScreens relative md:hidden w-full h-screen overflow-hidden flex items-center justify-center">
					{/* ============= HERO BACKGROUND IMAGE */}
					<img
						src={king}
						alt="Background"
						className="smallScreens__backgroundImage absolute inset-0 w-full h-full object-cover object-[center_80%] z-0"
					/>
					{/* ============= HERO CONTENT */}
					<div className="smallScreens__content relative flex items-center justify-center text-center rounded-[0.5rem] overflow-hidden">
						{/* ============= CONTENTS */}
						<div className="relative z-20 flex flex-col items-center justify-center">
							<h1 className="bg-[#000000] text-2xl font-unna font-bold uppercase border-t-12 border-b-12 border-orange-500 rounded-full hover:border-[#00ff91] transition duration-300 p-4 cursor-pointer">
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
							</h1>
						</div>
					</div>
				</div>

				{/* ========================================================================== */}
				{/* ============================== MEDIUM SCREENS */}
				<div className="hidden md:flex relative overflow-hidden w-full pb-[3rem] md:bg-gradient-to-r from-[#000AFD] via-[#00FF91] to-[#000AFD]">
					{/* ============= MEDIUM AND LARGE SCREENS HERO CONTAINER */}
					<div className="h-screen w-[90%] lg:w-[70%] mx-auto flex flex-col md:flex-row items-center justify-center gap-[1rem] lg:gap-[4rem]">
						<motion.div
							className="flex-shrink-0"
							initial={springZoom.initial}
							animate={springZoom.animate}
							transition={springZoom.transition}
						>
							{/* ============= HERO DEV IMAGE */}
							<a
								href="https://docs.google.com/document/d/1rMZx8aLk1ZitCwSRTK706o19mj5UgyeQGABCZt6eAJg/edit?usp=sharing"
								target="_blank"
								rel="noopener noreferrer"
							>
								<motion.div className="w-full h-[370px] lg:h-[430px] overflow-hidden border-b-12 border-t-12 border-orange-500 hover:border-[#00ff91] rounded-full z-20 relative transition-all duration-300 group">
									<img
										src={Kingv2}
										alt="King"
										className="object-cover w-full h-full cursor-pointer transition-transform duration-300 group-hover:scale-102"
									/>
								</motion.div>
							</a>
						</motion.div>

						{/* ================= HERO CONTENT */}
						<motion.div
							className="p-4 rounded-[0.5rem] flex flex-col items-center md:items-start text-center md:text-left"
							initial={{ opacity: 0, x: 200 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{
								type: "spring",
								stiffness: 50,
								damping: 20,
								delay: 0.5,
							}}
						>
							<h1 className="relative z-20 flex flex-col text-2xl  font-unna font-bold uppercase bg-[#000000] border-t-12 border-b-12 border-orange-500 rounded-full hover:border-[#00ff91] transition duration-300 p-4 cursor-pointer">
								<a
									href="https://www.w3schools.com/whatis/whatis_fullstack.asp"
									target="_blank"
									rel="noopener noreferrer"
								>
									Full-Stack Developer
								</a>
								<TimeDate
									showTime={false}
									className="timeDate text-[1rem] mx-auto font-semibold"
								/>
							</h1>
						</motion.div>
					</div>
					{/* ===================== GLOWING BOTTOM DIVIDER ===================== */}
					<div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[2px] bg-gradient-to-r from-transparent via-[#000AFD] to-transparent"></div>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
