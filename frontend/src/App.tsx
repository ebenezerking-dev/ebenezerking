// =====================================
// src/App.tsx
// =====================================
import "./index.css";

import Layout from "./components/Layout";
import Hero from "./components/HeroSection";
import About from "./components/AboutSection";
import Projects from "./components/ProjectsSection";
import Services from "./components/ServicesSection";
import Contact from "./components/ContactSection";

// =====================================
function App() {
	return (
		<Layout>
			<section id="home">
				<Hero />
			</section>

			<section id="about">
				<About />
			</section>

			<section id="projects">
				<Projects />
			</section>

			<section id="services">
				<Services />
			</section>

			<section id="contact">
				<Contact />
			</section>
		</Layout>
	);
}

export default App;
