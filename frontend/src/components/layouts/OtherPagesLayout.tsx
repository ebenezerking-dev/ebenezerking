// src/components/layouts/OtherPagesLayout.tsx

// ================== IMPORTS
import { Navigate, Outlet, useParams } from "react-router-dom";
import { NAVBAR_HEIGHT } from "../../constants/layout";
import { careers } from "../../data/careers";
import type { CareerData } from "../../types/career";
import Navbar from "../reusables/others/Navbar";
import Footer from "../reusables/others/Footer";
import BackToTop from "../reusables/others/BackToTop";
import ScrollToTop from "../reusables/others/ScrollToTop";

// ================== OTHER PAGES LAYOUT
const OtherPagesLayout = () => {
	const { career } = useParams();

	const selectedCareer = careers.find((item) => item.slug === career);

	if (!selectedCareer) {
		return <Navigate to="/" replace />;
	}

	return (
		<div className="flex flex-col min-h-dvh relative">
			{/* =================== SCROLL TO TOP */}
			<ScrollToTop />
			{/* =================== HEADER */}
			<header>
				<Navbar navigation={selectedCareer.navigation} />
			</header>

			{/* =================== MAIN */}
			<main
				className="w-full grow flex flex-col relative z-0"
				style={{ paddingTop: `${NAVBAR_HEIGHT}px` }}
			>
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
