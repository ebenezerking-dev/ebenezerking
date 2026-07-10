// src/components/layouts/OtherPagesLayout.tsx

// ================== IMPORTS
import { Navigate, Outlet, useParams } from "react-router-dom";
import { careers } from "../../data/careers";
import type { CareerData } from "../../types/career";
import Navbar from "../reusables/Navbar";
import Footer from "../reusables/Footer";
import BackToTop from "../reusables/BackToTop";

// ================== OTHER PAGES LAYOUT
const OtherPagesLayout = () => {
	const { career } = useParams();

	const selectedCareer = careers.find((item) => item.slug === career);

	if (!selectedCareer) {
		return <Navigate to="/" replace />;
	}

	return (
		<div className="flex flex-col min-h-screen relative">
			{/* =================== HEADER */}
			<header>
				<Navbar navigation={selectedCareer.navigation} />
			</header>

			{/* =================== MAIN */}
			<main className="w-full grow flex flex-col relative z-0 pt-(--navbar-height)">
				<Outlet context={selectedCareer satisfies CareerData} />
			</main>

			{/* =================== FOOTER */}
			<footer className="w-full relative z-0">
				<Footer />
			</footer>

			{/* =================== BACK TO TOP */}
			<BackToTop />
		</div>
	);
};

export default OtherPagesLayout;
