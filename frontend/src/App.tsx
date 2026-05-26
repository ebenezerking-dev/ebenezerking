// =====================================
// src/App.tsx
// =====================================

import "./index.css";

import Layout from "./Components/Layout";
import Hero from "./Components/HeroSection";
import About from "./Components/AboutSection";
import Projects from "./Components/ProjectsSection";
import Services from "./Components/ServicesSection";
import Contact from "./Components/ContactSection";


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
