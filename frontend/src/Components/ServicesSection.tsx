// =====================================
// src/Components/ServicesSection.tsx
// ===================================== SERVICES SECTION COMPONENT
import CardSlider from "./Reusables/CardSlider";
import { useState, useEffect } from "react";
import SectionFrame from "./Reusables/SectionFrame";

const services = [
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
	const [visibleCount, setVisibleCount] = useState(3);

	useEffect(() => {
		const updateCount = () => {
			if (window.innerWidth >= 1024) {
				setVisibleCount(4);
			} else if (window.innerWidth >= 768) {
				setVisibleCount(4);
			} else {
				setVisibleCount(3);
			}
		};

		updateCount();
		window.addEventListener("resize", updateCount);

		return () => window.removeEventListener("resize", updateCount);
	}, []);

	// =================================

	return (
		<SectionFrame className="serviceSection__parent relative h-auto w-full flex flex-col bg-[#262628] md:bg-gradient-to-b from-[#22050c] via-[#ABE0F0] to-[#22050c] overflow-hidden">
			{/* ============================== SECTION WRAPPER */}
			<div className="serviceSection__wrapper w-full md:w-[90%] lg:w-[70%] mx-auto">
				{/* ============================== CONTENT HEADER */}
				<div className="wrapper__header font-unna text-[1.1rem] text-center mb-[5rem]">
					<h2 className="sr-only servicesSection__header">Services</h2>

					<h3 className="header relative inline-block flex">
						<span className="text-orange-500 font-bold uppercase">
							services
						</span>{" "}
						i can offer you..
						<span className="absolute left-1/2 -translate-x-1/2 bottom-[-0.2rem] h-[0.2rem] w-[30%] bg-red-500 rounded-full"></span>
					</h3>
				</div>

				{/* ============================== SERVICE CARDS SLIDER */}
				<CardSlider
					items={services}
					visibleCount={visibleCount}
					renderItem={(service) => (
						<div className="serviceCard h-full flex flex-col justify-start text-center md:bg-[#22050c] px-4 py-[1rem] rounded-[0.5rem] md:rounded-[1rem] border-2 border-red-500">
							<h4 className="text-[1.25rem] font-bold text-orange-500 mb-2">
								{service.title}
							</h4>

							<p className="text-[1.1rem]">{service.description}</p>
						</div>
					)}
				/>
			</div>

			{/* ===================== GLOWING BOTTOM DIVIDER ===================== */}
			<div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[2px] bg-gradient-to-r from-transparent via-orange-500 to-transparent shadow-[0_0_12px_rgba(255,165,0,0.7)]"></div>
		</SectionFrame>
	);
};

export default ServicesSection;
