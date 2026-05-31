// =====================================
// src/Components/HomeSection.tsx
// ===================================== HOME SECTION COMPONENT
import Kingv2 from "../Assets/profilePic/kingAnimePp.webp";
import king from "../Assets/backgroundImage/kingAnimePortrait.webp";
// import amazingD from "../Assets/backgroundVideo/amazingD.mp4";
import { PiArrowFatLineDownFill } from "react-icons/pi";
import NavbarSpacer from "./Reusables/NavbarSpacer";
import { motion } from "framer-motion";

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
			<NavbarSpacer mobileOffset={15} mdOffset={-50} lgOffset={-40} />
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
						<div className="relative z-20 flex flex-col items-center justify-center p-2 bg-gradient-to-b from-[#00485d] to-[#ABE0F0]">
							<p className="text-[1.2rem] mb-2">Nice to meet you!</p>

							<h1 className="text-[1.4rem] text-[#22050c] font-bold uppercase border-t-2 border-b-2 border-orange-500 hover:border-[#00ff91] transition duration-300 px-2">
								<a
									href="https://docs.google.com/document/d/1rMZx8aLk1ZitCwSRTK706o19mj5UgyeQGABCZt6eAJg/edit?usp=sharing"
									target="_blank"
									rel="noopener noreferrer"
								>
									I'm a full-stack Developer
								</a>
							</h1>

							<span className="flex items-center gap-1 mt-4 animate-bounce text-[#22050c]">
								<PiArrowFatLineDownFill className="text-[1.2rem] opacity-70" />
								<PiArrowFatLineDownFill className="text-[1.2rem] opacity-70" />
								<PiArrowFatLineDownFill className="text-[1.2rem] opacity-70" />
							</span>
						</div>
					</div>
				</div>

				{/* ========================================================================== */}
				{/* ============================== MEDIUM SCREENS */}
				<div className="hidden md:flex relative overflow-hidden w-full pb-[3rem] md:bg-gradient-to-b from-[#00485d] from-0% via-[#8ad6ed] via-50% to-[#00485d] to-100%">
					{/* ============= MEDIUM AND LARGE SCREENS HERO CONTAINER */}
					<div className="h-screen w-[90%] lg:w-[70%] pt-[6rem] mx-auto flex flex-col md:flex-row items-center justify-center gap-[3rem] lg:gap-[5rem]">
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
								<motion.div className="w-full h-[370px] lg:h-[430px] overflow-hidden border-4 border-orange-500 hover:border-[#00ff91] rounded-full z-20 relative transition-all duration-300 group">
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
							className="text-[#22050c] p-4 rounded-[0.5rem] flex flex-col items-center md:items-start text-center md:text-left"
							initial={{ opacity: 0, x: 200 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{
								type: "spring",
								stiffness: 50,
								damping: 20,
								delay: 0.5,
							}}
						>
							<h1 className="relative z-20 text-[2rem] font-unna font-bold uppercase border-t-4 border-b-4 border-orange-500 hover:border-[#00ff91] transition duration-300 px-2">
								<a
									href="https://www.coursera.org/articles/full-stack-developer"
									target="_blank"
									rel="noopener noreferrer"
								>
									Full-Stack Developer
								</a>
							</h1>
						</motion.div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
