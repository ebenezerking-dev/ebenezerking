// =====================================
// src/Components/ServicesSection.tsx
// ===================================== SERVICES SECTION COMPONENT

import neonUmbrellaRainyNight from "../Assets/backgroundImage/neonUmbrellaRainyNight.webp";
import PageLayout from "./Reusables/PageLayout";
import CardSlider from "./Reusables/CardSlider";
import { useState, useEffect } from "react";

const services = [
	{
		title: "Front-End Development",
		description:
			"Build responsive, modern React apps with reusable components and smooth animations.",
	},
	{
		title: "Back-End Development",
		description:
			"Create secure, scalable APIs and server logic using Node.js, Express, and MongoDB.",
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
		<section className="servicesSection relative min-h-screen w-full flex flex-col md:bg-black text-[#dbcfff]/90 overflow-hidden">
			{/* ============================== HERO IMAGE */}
			<img
				src={neonUmbrellaRainyNight}
				alt="Background"
				className="md:hidden absolute inset-0 w-full h-full object-cover object-[center_30%]"
			/>

			{/* ============================== PAGE LAYOUT */}
			<PageLayout
				header={
					<div className="servicesSectionHeader__parent text-[1.1rem] text-[#dbcfff] text-center md:text-[1rem] w-fit mx-auto bg-black/80 backdrop-blur-sm md:bg-transparent md:backdrop-blur-0 p-[0.1rem] rounded md:text-start">
						<h2 className="sr-only servicesSection__header">Services</h2>
						<h3 className="servicesSection__subHeader">
							...how can I be of{" "}
							<span className="text-orange-500">service</span> to you
						</h3>
					</div>
				}
			>
				{/* ============================== SERVICE CARDS SLIDER */}
				<CardSlider
					items={services}
					visibleCount={visibleCount}
					renderItem={(service) => (
						<div className="serviceCard h-full flex flex-col justify-start text-center bg-black/80 backdrop-blur-sm px-4 py-[1rem] rounded-[0.5rem] md:rounded-[1rem] border border-orange-500">
							<h4 className="text-[1.25rem] font-bold text-orange-500 mb-2">
								{service.title}
							</h4>

							<p className="text-[1.1rem]">{service.description}</p>
						</div>
					)}
				/>
			</PageLayout>
			{/* ===================== GLOWING BOTTOM DIVIDER ===================== */}
			<div className="hidden md:block pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[2px] bg-gradient-to-r from-transparent via-orange-500/70 to-transparent shadow-[0_0_12px_rgba(255,165,0,0.7)]">
				{/* Upward glow (realistic fade) */}
				<div className="absolute bottom-[4px] left-0 w-full h-[20px] bg-gradient-to-t from-orange-500/50 via-orange-500/20 to-transparent blur-[12px] opacity-80"></div>
			</div>
		</section>
	);
};

export default ServicesSection;
