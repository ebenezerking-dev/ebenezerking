// =====================================
// SERVICES SECTION
// src/Components/ServicesSection.tsx
// =====================================
import CardSlider from "../components/reusables/CardSlider";
import SectionFrame from "../components/reusables/SectionFrame";

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
		<SectionFrame className="serviceSection__parent relative h-auto w-full flex flex-col bg-gradient-to-r from-[#000AFD] via-[#00FF91] to-[#000AFD] overflow-hidden">
			{/* ============================== SECTION WRAPPER */}
			<div className="serviceSection__wrapper w-full md:w-[90%] lg:w-[70%] mx-auto">
				{/* ============================== CONTENT HEADER */}
				<div className="text-left">
					<div className="wrapper__header inline-block uppercase font-unna font-bold text-[1rem] mb-[14rem] bg-[#000000] p-3 rounded-[1rem]">
						<h2 className="sr-only servicesSection__header">Services</h2>

						<h3 className="header relative inline-block flex">
							services i can offer you.
							<span className="absolute left-1/2 -translate-x-1/2 bottom-[-0.2rem] h-[0.2rem] w-[30%] bg-red-500 rounded-full"></span>
						</h3>
					</div>
				</div>

				{/* ============================== SERVICE CARDS SLIDER */}
				<CardSlider<Service>
					items={services}
					renderItem={(service: Service) => (
						<div className="serviceCard h-full flex flex-col justify-start font-tinos text-lg font-semibold text-[#22050c] hover:text-[#00ff91] text-center px-4 py-[1rem] rounded-[0.5rem] md:rounded-[1rem] border-2 border-[#000AFD]/20 hover:bg-[#000000] hover:border-[#00ff91] transition-all duration-300">
							<h4 className="text-2xl font-unna font-bold mb-2">
								{service.title}
							</h4>

							<p>{service.description}</p>
						</div>
					)}
				/>
			</div>

			{/* ===================== GLOWING BOTTOM DIVIDER ===================== */}
			<div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[2px] bg-gradient-to-r from-transparent via-[#000AFD] to-transparent"></div>
		</SectionFrame>
	);
};

export default ServicesSection;
