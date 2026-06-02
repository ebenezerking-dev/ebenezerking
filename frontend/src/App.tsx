// =====================================
// src/App.tsx
// =====================================
import "./index.css";

import Layout from "./components/Layout";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import ServicesSection from "./components/ServicesSection";
import ContactSection from "./components/ContactSection";

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
