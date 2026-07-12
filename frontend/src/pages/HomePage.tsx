// src/pages/HomePage.tsx
// ================== IMPORTS
import { motion } from "framer-motion";
import HomeSelection from "../components/home/HomeSelection";
import {
	heroTitleVariants,
	HomeHeroImageVariants,
} from "../components/reusables/animations";
import HeroVideo from "../components/ui/HeroVideo";
import { images } from "../data/media";
// ================= HOME PAGE
const HomePage = () => {
	return (
		<div className="homePage_wrapper">
			{/* ====== */}
			{/* ====== */}
			{/* ============================== SMALL SCREENS */}
			<div className="smallScreens relative md:hidden w-full min-h-dvh overflow-hidden">
				{/* ============= HERO DEV IMAGE BACKGROUND */}
				<img
					src={images.homePage.mobileHeroPoster}
					alt="Background"
					className="absolute inset-0 w-full h-full object-cover object-center z-0 scale-200 sm:scale-100 origin-top"
				/>

				{/* ======================== HERO CONTENT */}
				<div className="heroContent__wrapper absolute inset-0 z-10 flex items-center justify-center bg-black/20">
					<div className="w-full h-160 flex flex-col gap-8">
						{/* ======================== HEADER */}
						<motion.div
							variants={heroTitleVariants}
							initial="hidden"
							animate="visible"
							className="bg-black w-fit mx-auto px-3 pt-1 pb-3 rounded-2xl"
						>
							<h1 className="relative inline-flex text-white">
								Choose a career to explore.
								<span className="absolute left-1/2 bottom-[-0.2rem] h-[0.2rem] w-[30%] -translate-x-1/2 rounded-full bg-orange-500" />
							</h1>
						</motion.div>

						{/* ======================== BODY */}
						<div className="flex-1 flex flex-col justify-end gap-3 pl-6 pb-5">
							<HomeSelection />
						</div>
					</div>
				</div>
			</div>

			{/* ====== */}
			{/* ====== */}
			{/* ============================== MEDIUM AND LARGE SCREENS */}
			<div className="main__wrapper hidden md:block relative bg-[linear-gradient(160deg,#7a19ff,#150036,#7a19ff)] overflow-hidden w-full min-h-screen">
				{/* ======================== HERO CONTENT */}
				<div className="family h-screen w-[90%] lg:w-[70%] mx-auto flex items-center justify-center">
					<div className="parent relative w-full h-120 flex flex-col">
						{/* ======================== HEADER */}
						<HeroVideo className="w-full flex-1 h-80 rounded-xl rounded-tl-[10rem]">
							<motion.div
								variants={heroTitleVariants}
								initial="hidden"
								animate="visible"
								className="bg-[#000000] w-fit mx-auto px-3 pt-1 pb-3 rounded-2xl"
							>
								<h1 className="relative inline-flex">
									Choose a career to explore.
									<span className="w-[30%] absolute left-1/2 -translate-x-1/2 bottom-[-0.2rem] h-[0.2rem] bg-orange-500 rounded-full" />
								</h1>
							</motion.div>

							{/* ====================== BODY */}
							<div className="h-full flex flex-col justify-center gap-3 px-6">
								<HomeSelection />
							</div>
						</HeroVideo>

						{/* ============= HERO DEV IMAGE */}
						<motion.div
							variants={HomeHeroImageVariants}
							initial="hidden"
							animate="visible"
							className="parent__image absolute z-0 -top-2 right-0 w-80"
						>
							<img
								src={images.homePage.mobileHeroPoster}
								alt="King"
								className="object-cover w-full h-auto scale-x-[-1] rounded-br-[5rem] border-b-6 border-orange-500 group-hover:border-[#00ff91] transition-all duration-500"
							/>
						</motion.div>
					</div>
				</div>

				{/* ===================== GLOWING BOTTOM DIVIDER ===================== */}
				<div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-1.5 bg-linear-to-r from-transparent via-orange-500 to-transparent"></div>
			</div>
		</div>
	);
};

export default HomePage;
