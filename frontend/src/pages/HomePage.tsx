// src/pages/HomePage.tsx

// ================== IMPORTS
import { motion } from "framer-motion";
import HomeSelection from "../components/home/HomeSelection";
import MediaBackground from "../components/ui/MediaBackground";
import { images, videos } from "../data/media";
import {
	homepageHeroTitle,
	developerImage,
	viewportOnce,
	bottomDivider,
} from "../components/reusables/animations/shared";

// ================= HOME PAGE
const HomePage = () => {
	return (
		<div className="homePage_wrapper">
			{/* ============================== SMALL SCREENS */}
			<div className="smallScreens relative min-h-dvh w-full overflow-hidden md:hidden">
				{/* ================= HERO BACKGROUND */}
				<img
					src={images.homePage.mobileHeroProfilePic}
					alt="Background"
					className="absolute inset-0 z-0 h-full w-full origin-top scale-200 object-cover object-center sm:scale-100"
				/>

				{/* ================= HERO CONTENT */}
				<div className="heroContent__wrapper absolute inset-0 z-10 flex items-center justify-center bg-black/20">
					<div className="flex h-160 flex-col gap-8">
						{/* ================= HEADER */}
						<motion.div
							variants={homepageHeroTitle}
							initial="hidden"
							animate="visible"
							className="mx-auto w-fit rounded-2xl bg-black px-3 pt-1 pb-3"
						>
							<h1 className="relative inline-flex text-white">
								Choose a career to explore.
								<span className="absolute bottom-[-0.2rem] left-1/2 h-[0.2rem] w-[30%] -translate-x-1/2 rounded-full bg-orange-500" />
							</h1>
						</motion.div>

						{/* ================= BODY */}
						<div className="flex flex-1 flex-col justify-end gap-3 pb-5 pl-6">
							<HomeSelection />
						</div>
					</div>
				</div>
			</div>

			{/* ============================== MEDIUM & LARGE SCREENS */}
			<div className="main__wrapper relative hidden min-h-screen w-full overflow-hidden bg-[linear-gradient(160deg,#7a19ff,#150036,#7a19ff)] md:block">
				<div className="family mx-auto flex h-screen w-[90%] items-center justify-center lg:w-[70%]">
					<div className="parent relative flex h-120 w-full flex-col">
						{/* ================= VIDEO BACKGROUND */}
						<MediaBackground
							type="video"
							src={videos.homePage.heroVideo}
							poster={images.homePage.videoImagePoster}
							className="h-80 flex-1 w-full rounded-xl rounded-tl-[10rem]"
						>
							{/* ================= HEADER */}
							<motion.div
								variants={homepageHeroTitle}
								initial="hidden"
								animate="visible"
								className="mx-auto w-fit rounded-2xl bg-black px-3 pt-1 pb-3"
							>
								<h1 className="relative inline-flex">
									Choose a career to explore.
									<span className="absolute bottom-[-0.2rem] left-1/2 h-[0.2rem] w-[30%] -translate-x-1/2 rounded-full bg-orange-500" />
								</h1>
							</motion.div>

							{/* ================= BODY */}
							<div className="flex h-full flex-col justify-center gap-3 px-6">
								<HomeSelection />
							</div>
						</MediaBackground>

						{/* ================= PROFILE IMAGE */}
						<motion.div
							variants={developerImage}
							initial="hidden"
							animate="visible"
							className="parent__image absolute -top-2 right-0 z-0 w-80"
						>
							<img
								src={images.homePage.mobileHeroProfilePic}
								alt="King"
								className="h-auto w-full scale-x-[-1] rounded-br-[5rem] border-b-6 border-orange-500 object-cover transition-all duration-500 group-hover:border-[#00ff91]"
							/>
						</motion.div>
					</div>
				</div>

				{/* ================= BOTTOM DIVIDER */}
				<motion.div
					variants={bottomDivider}
					initial="hidden"
					whileInView="visible"
					viewport={viewportOnce}
					className="pointer-events-none absolute bottom-0 left-1/2 h-1.5 w-[80%] -translate-x-1/2 bg-linear-to-r from-transparent via-orange-500 to-transparent"
				/>
			</div>
		</div>
	);
};

export default HomePage;
