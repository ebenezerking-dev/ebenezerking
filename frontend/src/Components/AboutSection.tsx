// =====================================
// src/Components/AboutSection.tsx
// ===================================== ABOUT SECTION COMPONENT

import tokyoNights from "../Assets/backgroundImage/tokyoNight.webp";
import PageLayout from "./Reusables/PageLayout";

// =====================================
const AboutSection = () => {
	return (
		<section className="aboutSection__parent relative min-h-screen w-full flex flex-col md:px-0 md:bg-black text-[#dbcfff] overflow-hidden">
			{/* ============================== MOBILE HERO IMAGE */}
			<img
				src={tokyoNights}
				alt="Background"
				className="md:hidden absolute inset-0 w-full h-full object-cover object-[center_30%]"
			/>

			{/* ============================== PAGE LAYOUT */}
			<PageLayout
				header={
					<div className="aboutSection__headerSubHeader text-[1.1rem] text-center md:text-[1rem] w-fit mx-auto bg-black/80 backdrop-blur-sm md:bg-transparent md:backdrop-blur-0 p-[0.1rem] rounded md:text-start">
						<h2 className="sr-only">About Me</h2>

						<h3 className="aboutSection__subHeader">
							...About me{" "}
							<span className="text-orange-500">professionally</span>
						</h3>
					</div>
				}
			>
				{/* ============================== ABOUT CONTENT */}
				<div className="aboutSection__paragraphs flex flex-1 flex-col justify-center gap-4 lg:gap-3 text-[1.2rem] w-full pb-[3rem] text-[#dbcfff]/90">
					<p className="w-fit bg-black/80 backdrop-blur-sm md:border md:border-orange-500 rounded-[1rem] md:rounded-[0.5rem] px-4 py-[0.2rem]">
						I enjoy being a full-stack developer.
					</p>

					<p className="w-fit bg-black/80 backdrop-blur-sm md:border md:border-orange-500 rounded-[1rem] md:rounded-[0.5rem] px-4 py-[0.2rem]">
						I started my tech journey on May 19th, 2024, this was the beginning
						of a new chapter in my life.
					</p>

					<p className="w-fit bg-black/80 backdrop-blur-sm md:border md:border-orange-500 rounded-[1rem] md:rounded-[0.5rem] px-4 py-[0.2rem]">
						Actively being part of the tech ecosystem has helped me grow — not
						just technically, but also as an individual, a team member, and a
						leader.
					</p>

					<p className="w-fit bg-black/80 backdrop-blur-sm md:border md:border-orange-500 rounded-[1rem] md:rounded-[0.5rem] px-4 py-[0.2rem]">
						With over two years of experience, I build full-stack applications
						using the JavaScript ecosystem.
					</p>

					<p className="w-fit bg-black/80 backdrop-blur-sm md:border md:border-orange-500 rounded-[1rem] md:rounded-[0.5rem] px-4 py-[0.2rem]">
						<span className="font-bold text-orange-500/90">
							On the frontend,
						</span>{" "}
						I work with{" "}
						<span className="font-bold text-orange-500/90">
							React, TypeScript, Vite, and Tailwind CSS.
						</span>
					</p>

					<p className="w-fit bg-black/80 backdrop-blur-sm md:border md:border-orange-500 rounded-[1rem] md:rounded-[0.5rem] px-4 py-[0.2rem]">
						<span className="font-bold text-orange-500/90">
							On the backend,
						</span>{" "}
						I build <span className="font-bold text-orange-500/90">APIs</span>{" "}
						using{" "}
						<span className="font-bold text-orange-500/90">
							Node.js and Express
						</span>{" "}
						and work with{" "}
						<span className="font-bold text-orange-500/90">
							MongoDB or SQL databases.
						</span>
					</p>

					<p className="w-fit bg-black/80 backdrop-blur-sm md:border md:border-orange-500 rounded-[1rem] md:rounded-[0.5rem] px-4 py-[0.2rem]">
						I’m constantly learning and refining my craft, pushing myself to
						build better with each experience.
					</p>
				</div>
			</PageLayout>

			{/* ===================== GLOWING BOTTOM DIVIDER ===================== */}
			<div className="hidden md:block pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[2px] bg-gradient-to-r from-transparent via-orange-500/70 to-transparent shadow-[0_0_12px_rgba(255,165,0,0.7)]">
				<div className="absolute bottom-[4px] left-0 w-full h-[20px] bg-gradient-to-t from-orange-500/50 via-orange-500/20 to-transparent blur-[12px] opacity-80"></div>
			</div>
		</section>
	);
};

export default AboutSection;
