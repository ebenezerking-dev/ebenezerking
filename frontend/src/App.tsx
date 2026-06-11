// =====================================
// src/App.tsx
// =====================================
import "./index.css";

import Layout from "./components/sections/Layout";
import HeroSection from "./components/sections/HeroSection";
import AboutSection from "./components/sections/AboutSection";
import ProjectsSection from "./components/sections/ProjectsSection";
import ServicesSection from "./components/sections/ServicesSection";
import ContactSection from "./components/sections/ContactSection";

// =====================================
function App() {
	return (
		<Layout>
			<section id="home">
				<HeroSection />
			</section>

			<section id="about">
				<AboutSection />
			</section>

			<section id="projects">
				<ProjectsSection />
			</section>

			<section id="services">
				<ServicesSection />
			</section>

			<section id="contact">
				<ContactSection />
			</section>
		</Layout>
	);
}

export default App;
