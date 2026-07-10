// src/pages/CareerPage.tsx
// Renders the currently selected career provided by OtherPagesLayout

// ================== IMPORTS
import { useOutletContext } from "react-router-dom";
import type { CareerData } from "../types/career";
import HeroSection from "../components/sections/HeroSection";
import AboutSection from "../components/sections/AboutSection";
import ProjectsSection from "../components/sections/ProjectsSection";
import ServicesSection from "../components/sections/ServicesSection";
import ContactSection from "../components/sections/ContactSection";
// ================== CAREER PAGE
const CareerPage = () => {
	const selectedCareer = useOutletContext<CareerData>();

	return (
		<>
			<HeroSection hero={selectedCareer.hero} theme={selectedCareer.theme} />

			<AboutSection about={selectedCareer.about} theme={selectedCareer.theme} />

			{selectedCareer.projects && (
				<ProjectsSection
					projects={selectedCareer.projects}
					theme={selectedCareer.theme}
				/>
			)}

			{selectedCareer.services && (
				<ServicesSection
					services={selectedCareer.services}
					theme={selectedCareer.theme}
				/>
			)}

			<ContactSection
				contact={selectedCareer.contact}
				career={selectedCareer.slug}
				theme={selectedCareer.theme}
			/>
		</>
	);
};

export default CareerPage;
