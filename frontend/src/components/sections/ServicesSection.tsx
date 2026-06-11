// =====================================
// SERVICES SECTION
// src/components/sections/ServicesSection.tsx
// =====================================
import CardSlider from "../reusables/CardSlider";
import SectionFrame from "../reusables/SectionFrame";
import { motion } from "framer-motion";
import {
	containerVariants,
	headerVariants,
	underlineVariants,
	dividerVariants,
	viewportRepeat,
} from "../reusables/animations/sectionAnimations";

// =====================================
type Service = {
	title: string;
	description: string;
};

// =====================================
const services: Service[] = [
	{
		title: "Front-End Development",
		description:
			"Build responsive, modern React apps with reusable components and smooth animations.",
	},
	{
		title: "Back-End Development",
		description:
			"Create secure, scalable APIs and server logic using Node.js, Express, MongoDB or PostgreSQL.",
	},
	{
		title: "Full-Stack Solutions",
		description:
			"Deliver end-to-end applications: e-commerce platforms, real-time apps, and CMS solutions.",
	},
	{
		title: "Code Review & Optimization",
		description:
			"Audit existing code for performance, fix inefficiencies, and improve maintainability.",
	},
	{
		title: "Code Revamp & Modernization",
		description:
			"Refactor or rebuild frontend and backend code for better structure, scalability, and maintainability.",
	},
	{
		title: "Deployment & Maintenance",
		description:
			"Deploy on AWS, Vercel, Netlify, or custom domains, optimize performance, and maintain your apps.",
	},
	{
		title: "Consulting & Advanced Services",
		description:
			"Technical guidance, API integration, serverless functions, testing strategies, and architecture planning.",
	},
];

const ServicesSection = () => {
	return (
		<SectionFrame>
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
					<motion.div variants={headerVariants} className="text-left">
						<div className="wrapper__header inline-block uppercase font-unna font-bold text-[1rem] mb-[14rem] bg-[#000000] p-3 rounded-[1rem]">
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

					<CardSlider<Service>
						items={services}
						staggerDelay={0.12}
						cardAnimation="fadeUp"
						renderItem={(service: Service, index: number) => (
							<motion.div className="serviceCard h-full flex flex-col justify-start font-tinos bg-[#000000]/20 text-lg hover:text-[#00ff91] text-center px-4 py-[1rem] rounded-[0.5rem] md:rounded-[1rem] border-1 border-[#000AFD]/80 hover:bg-[#000000] hover:border-[#00ff91] transition-all duration-300">
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
					className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[2px] bg-gradient-to-r from-transparent via-orange-500 to-transparent origin-left"
				/>
			</motion.div>
		</SectionFrame>
	);
};

export default ServicesSection;
