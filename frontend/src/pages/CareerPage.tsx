// src/pages/CareerPage.tsx
// Renders the currently selected career provided by OtherPagesLayout

// ================== IMPORTS
import { useOutletContext } from "react-router-dom";
import type { CareerData } from "../types/career";
import CareersHeroSection from "../components/sections/shared/CareersHeroSection";
import AboutSection from "../components/sections/shared/AboutSection";
import SkillsSection from "../components/sections/shared/SkillsSection";
import ExperienceSection from "../components/sections/shared/ExperienceSection";
import ProjectsSection from "../components/sections/shared/ProjectsSection";
import ServicesSection from "../components/sections/shared/ServicesSection";
import CertificationSection from "../components/sections/shared/CertificationSection";
import ContactSection from "../components/sections/shared/ContactSection";
// ================== CAREER PAGE
const CareerPage = () => {
	const selectedCareer = useOutletContext<CareerData>();

	return (
		<>
			<CareersHeroSection
				hero={selectedCareer.hero}
				theme={selectedCareer.theme}
			/>

			<AboutSection about={selectedCareer.about} theme={selectedCareer.theme} />

			<SkillsSection
				skills={selectedCareer.skills}
				theme={selectedCareer.theme}
			/>

			<ExperienceSection
				experience={selectedCareer.experience}
				theme={selectedCareer.theme}
			/>

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

			{selectedCareer.certifications && (
				<CertificationSection
					certifications={selectedCareer.certifications}
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
