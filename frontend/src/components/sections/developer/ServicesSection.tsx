// src/components/sections/developer/ServicesSection.tsx
// this is a section that renders the services data for a career page
// ================== IMPORTS
import CareerSectionFrame from "../frames/shared/CareerSectionFrame";
import ServiceCardSlider from "../../reusables/others/ServiceCardSlider";
import { motion } from "framer-motion";
import type { Service, ServiceData, Theme } from "../../../types/career";
import {
	viewportRepeat,
	developer,
	header,
	headerUnderline,
	bottomDivider,
} from "../../reusables/animations/developerSc";

// ================== PROPS
interface ServicesSectionProps {
	services: ServiceData;
	theme: Theme;
}
// ================== SERVICES SECTION
const ServicesSection = ({ services, theme }: ServicesSectionProps) => {
	return (
		<CareerSectionFrame id="services" theme={theme}>
			<motion.div
				variants={developer}
				initial="hidden"
				whileInView="visible"
				viewport={viewportRepeat}
				className="parent relative h-auto w-full flex flex-col overflow-hidden"
			>
				{/* ============================== SERVICES WRAPPER */}
				<motion.div className="wrapper w-full md:w-[90%] lg:w-[70%] mx-auto">
					{/* ============================== SERVICES HEADER */}
					<motion.div variants={header} className="header text-left px-4">
						<div className="inline-block uppercase font-unna font-bold text-[1rem] mb-56 bg-[#000000] p-3 rounded-2xl">
							<h3 className="relative inline-block">
								{services.title}
								<motion.span
									variants={headerUnderline}
									initial="hidden"
									whileInView="visible"
									viewport={viewportRepeat}
									className="absolute left-1/2 -translate-x-1/2 bottom-[-0.2rem] h-[0.2rem] w-[30%] bg-red-500 rounded-full"
								/>
							</h3>
						</div>
					</motion.div>

					{/* ============================== SERVICES BODY */}
					{/* ============================== SERVICE CARDS SLIDER */}
					<ServiceCardSlider<Service>
						items={services.items}
						renderItem={(service: Service, index: number) => (
							<motion.div
								key={index}
								className="serviceCard h-full flex flex-col justify-start font-tinos bg-[#000000]/20 text-lg hover:text-[#00ff91] text-center px-4 py-4 rounded-lg md:rounded-2xl border border-[#000AFD]/80 hover:bg-[#000000] hover:border-[#00ff91] transition-all duration-300"
							>
								<h4 className="relative text-2xl font-unna font-bold mb-3">
									{service.title}
									<motion.span
										variants={headerUnderline}
										className="absolute left-1/2 -translate-x-1/2 bottom-[-0.2rem] h-[0.2rem] bg-red-500 rounded-full"
									/>
								</h4>

								<motion.p>{service.description}</motion.p>
							</motion.div>
						)}
					/>
				</motion.div>

				{/* ===================== GLOWING BOTTOM DIVIDER ===================== */}
				<motion.div
					variants={bottomDivider}
					initial="hidden"
					whileInView="visible"
					viewport={viewportRepeat}
					className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-0.5 bg-linear-to-r from-transparent via-orange-500 to-transparent origin-left"
				/>
			</motion.div>
		</CareerSectionFrame>
	);
};

export default ServicesSection;
