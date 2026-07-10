// src/components/sections/ServicesSection.tsx
// this is a section that renders the services data for a career page
// ================== IMPORTS
import ServiceCardSlider from "../reusables/ServiceCardSlider";
import SectionFrame from "./Frames/SectionFrame";
import { motion } from "framer-motion";
import type { Service, Theme } from "../../types/career";
import {
	containerVariants,
	headerVariants,
	underlineVariants,
	dividerVariants,
	viewportRepeat,
} from "../reusables/animations/sectionAnimations";

// ================== PROPS
interface ServicesSectionProps {
	services: Service[];
	theme: Theme;
}
// ================== SERVICES SECTION
const ServicesSection = ({ services, theme }: ServicesSectionProps) => {
	return (
		<SectionFrame id="services" theme={theme}>
			<motion.div
				initial="hidden"
				whileInView="visible"
				viewport={viewportRepeat}
				className="serviceSection__parent relative h-auto w-full flex flex-col overflow-hidden"
			>
				{/* ============================== SECTION WRAPPER */}
				<motion.div
					variants={containerVariants}
					className="serviceSection__wrapper w-full md:w-[90%] lg:w-[70%] mx-auto"
				>
					{/* ============================== CONTENT HEADER */}
					<motion.div variants={headerVariants} className="text-left px-4">
						<div className="wrapper__header inline-block uppercase font-unna font-bold text-[1rem] mb-56 bg-[#000000] p-3 rounded-2xl">
							<h2 className="sr-only servicesSection__header">Services</h2>

							<h3 className="header relative inline-block">
								services i can offer you.
								<motion.span
									variants={underlineVariants}
									initial="hidden"
									whileInView="visible"
									viewport={viewportRepeat}
									className="absolute left-1/2 -translate-x-1/2 bottom-[-0.2rem] h-[0.2rem] w-[30%] bg-red-500 rounded-full"
								/>
							</h3>
						</div>
					</motion.div>

					{/* ============================== SERVICE CARDS SLIDER */}
					<ServiceCardSlider<Service>
						items={services}
						staggerDelay={0.12}
						cardAnimation="fadeUp"
						renderItem={(service: Service, index: number) => (
							<motion.div
								key={index}
								className="serviceCard h-full flex flex-col justify-start font-tinos bg-[#000000]/20 text-lg hover:text-[#00ff91] text-center px-4 py-4 rounded-lg md:rounded-2xl border border-[#000AFD]/80 hover:bg-[#000000] hover:border-[#00ff91] transition-all duration-300"
							>
								<h4 className="relative text-2xl font-unna font-bold mb-3">
									{service.title}
									<motion.span
										variants={{
											hidden: { width: "0%", opacity: 0 },
											visible: {
												width: "30%",
												opacity: 1,
												transition: {
													duration: 0.6,
													delay: 0.2 + index * 0.1,
													ease: "easeInOut",
												},
											},
										}}
										className="absolute left-1/2 -translate-x-1/2 bottom-[-0.2rem] h-[0.2rem] bg-red-500 rounded-full"
									/>
								</h4>

								<motion.p
									variants={{
										hidden: { opacity: 0 },
										visible: {
											opacity: 1,
											transition: { duration: 0.4, delay: 0.3 + index * 0.1 },
										},
									}}
								>
									{service.description}
								</motion.p>
							</motion.div>
						)}
					/>
				</motion.div>

				{/* ===================== GLOWING BOTTOM DIVIDER ===================== */}
				<motion.div
					variants={dividerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={viewportRepeat}
					className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-0.5 bg-linear-to-r from-transparent via-orange-500 to-transparent origin-left"
				/>
			</motion.div>
		</SectionFrame>
	);
};

export default ServicesSection;
