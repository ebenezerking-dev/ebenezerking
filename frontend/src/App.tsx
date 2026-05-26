// =====================================
// src/App.tsx
// =====================================

import "./index.css";

import Navbar from "./Components/Reusables/Navbar";
import Hero from "./Components/HeroSection";
import About from "./Components/AboutSection";
import Projects from "./Components/ProjectsSection";
import Services from "./Components/ServicesSection";
import Contact from "./Components/ContactSection";
import Footer from "./Components/Reusables/Footer";

import BackToTop from "./Components/Reusables/BackToTop";

// =====================================
function App() {
	return (
		<>
			<Navbar />

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

			<BackToTop />

			<Footer />
		</>
	);
}

export default App;
