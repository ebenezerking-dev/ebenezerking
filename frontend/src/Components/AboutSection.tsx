// =====================================
// src/Components/AboutSection.tsx
// ===================================== ABOUT SECTION COMPONENT

import SectionFrame from "./Reusables/SectionFrame";

// =====================================
const AboutSection = () => {
	return (
		<SectionFrame className="aboutSection__parent relative h-auto w-full flex flex-col bg-gradient-to-b from-[#00485d] from-0% via-[#8ad6ed] via-50% to-[#00485d] to-100% overflow-hidden">
			{/* ============================== SECTION WRAPPER */}
			<div className="aboutSection__wrapper w-full md:w-[90%] lg:w-[70%] mx-auto">
				{/* ============================== CONTENT HEADER */}
				<div className="wrapper__header uppercase font-unna font-bold text-[1rem] text-center mb-[16rem]">
					<h2 className="sr-only aboutSection__header">About Me</h2>

					<h3 className="header relative inline-block flex">
						I am <span className="text-orange-500">King.</span>
						<span className="absolute left-1/2 -translate-x-1/2 bottom-[-0.2rem] h-[0.2rem] w-[30%] bg-orange-500 rounded-full"></span>
					</h3>
				</div>

				{/* ============================== CONTENT */}
				<div className="content__paragraphs flex flex-col justify-center gap-4 lg:gap-3 text-[#22050c] w-full md:p-4 rounded-[0.5rem]">
					<p className="font-bold">
						<span>A Software Developer — </span>

						<span className="block sm:inline">
							<span className="uppercase text-[#00ff91] text-[1.8rem]">I</span>{" "}
							think,
							<span className="uppercase text-[#00ff91] text-[1.8rem]">
								{" "}
								I
							</span>{" "}
							visualise,
							<span className="uppercase text-[#00ff91] text-[1.8rem]">
								{" "}
								I
							</span>{" "}
							code.
						</span>
					</p>
					<p>
						I turn my ideas into modern digital experiences by combining
						thoughtful design, clean code architecture, and problem-solving to
						build products people enjoy using.
					</p>

					<p>
						From responsive front-end interfaces to scalable backend systems, I
						build and manage full-stack web applications focused on performance,
						usability, and real business impact.
					</p>

					<p>
						I also strive well in a collaborative team setting, brainstorming
						creative solutions, and bringing projects to life with attention to
						detail and user experience.
					</p>
				</div>
			</div>
			{/* ===================== GLOWING BOTTOM DIVIDER ===================== */}
			<div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[2px] bg-gradient-to-r from-transparent via-orange-500 to-transparent shadow-[0_0_12px_rgba(255,165,0,0.7)]"></div>
		</SectionFrame>
	);
};

export default AboutSection;
