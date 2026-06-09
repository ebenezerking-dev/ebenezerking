// =====================================
// src/Components/AboutSection.tsx
// ===================================== ABOUT SECTION COMPONENT
import SectionFrame from "../components/reusables/SectionFrame";

// =====================================
const AboutSection = () => {
	return (
		<SectionFrame className="aboutSection__parent relative h-auto w-full flex flex-col bg-gradient-to-r from-[#000AFD] via-[#00FF91] to-[#000AFD] overflow-hidden">
			{/* ============================== SECTION WRAPPER */}
			<div className="aboutSection__wrapper w-full md:w-[90%] lg:w-[70%] mx-auto">
				{/* ============================== CONTENT HEADER */}
				<div className="text-left">
					<div className="wrapper__header inline-block uppercase font-unna font-bold text-[1rem] mb-[14rem] bg-[#000000] p-3 rounded-[1rem]">
						<h2 className="sr-only aboutSection__header">About Me</h2>
						<h3 className="header relative inline-block">
							I am Ebenezer King.
							<span className="absolute left-1/2 -translate-x-1/2 bottom-[-0.2rem] h-[0.2rem] w-[30%] bg-orange-500 rounded-full"></span>
						</h3>
					</div>
				</div>

				{/* ============================== CONTENT */}
				<div className="content__paragraphs flex flex-col justify-center gap-4 lg:gap-3 text-[#22050c] w-full md:p-4 rounded-[0.5rem] text-lg font-semibold">
					<p className="font-bold">
						<span className="block xl:inline">
							<span className="uppercase text-orange-500 text-[1.8rem] font-bold">
								I
							</span>{" "}
							think,
							<span className="uppercase text-orange-500 text-[1.8rem] font-bold">
								{" "}
								I
							</span>{" "}
							visualise,
							<span className="uppercase text-orange-500 text-[1.8rem] font-bold">
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
			<div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[2px] bg-gradient-to-r from-transparent via-[#000AFD] to-transparent"></div>
		</SectionFrame>
	);
};

export default AboutSection;
