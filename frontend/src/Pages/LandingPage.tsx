// =====================================
// src/Pages/LandingPage.tsx
// ===================================== LANDING PAGE COMPONENT

import HomeSection from "../Components/HeroSection";
import AboutSection from "../Components/AboutSection";
import ProjectsSection from "../Components/ProjectsSection";
import ServicesSection from "../Components/ServicesSection";
import ContactSection from "../Components/ContactSection";

// =====================================

const LandingPage = () => {
	return (
		<div className="homePage__stackedSections flex flex-col z-30">
			{/* ========================= LANDING PAGE STACKED CONTENTS  */}
			<HomeSection />
			<AboutSection />
			<ProjectsSection />
			<ServicesSection />
			<ContactSection />
		</div>
	);
};

export default LandingPage;
