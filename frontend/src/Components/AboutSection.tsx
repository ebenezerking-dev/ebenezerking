// =====================================
// src/Components/AboutSection.tsx
// ===================================== ABOUT SECTION COMPONENT

import SectionFrame from "./Reusables/SectionFrame";

// =====================================
const AboutSection = () => {
	return (
		<SectionFrame className="aboutSection__parent relative h-auto w-full flex flex-col bg-[#181819] md:bg-[#22050c] overflow-hidden">
			{/* ============================== SECTION WRAPPER */}
			<div className="aboutSection__wrapper w-full md:w-[90%] lg:w-[70%] mx-auto px-4 pt-[2rem] pb-[4rem]">
				{/* ============================== CONTENT HEADER */}
				<div className="wrapper__header font-unna text-[1.1rem] text-start mb-[5rem]">
					<h2 className="sr-only">About Me</h2>

					<h3 className="header">
						<span className="text-[#dbcfff]">...</span>
						About me <span className="text-orange-500">professionally</span>
					</h3>
				</div>

				{/* ============================== CONTENT */}
				<div className="content__paragraphs font-tinos flex flex-col justify-center gap-4 lg:gap-3 text-[1.3rem] w-full">
					<p>
						I turn ideas into modern digital experiences by combining thoughtful
						design, clean code, and problem-solving to build products people
						enjoy using.
					</p>

					<p>
						From responsive front-end interfaces to scalable backend systems, I
						build and manage full-stack web applications focused on performance,
						usability, and real business impact.
					</p>

					<p>
						I enjoy collaborating with teams, brainstorming creative solutions,
						and bringing projects to life with attention to detail and user
						experience.
					</p>
				</div>
			</div>

			{/* ===================== GLOWING BOTTOM DIVIDER ===================== */}
			<div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[2px] bg-gradient-to-r from-transparent via-orange-500/70 to-transparent shadow-[0_0_12px_rgba(255,165,0,0.7)]"></div>
		</SectionFrame>
	);
};

export default AboutSection;
