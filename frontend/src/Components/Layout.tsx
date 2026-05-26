// =====================================
// src/Components/Layout.tsx
// ===================================== LAYOUT COMPONENT
import Navbar from "./Reusables/Navbar";
import Footer from "./Reusables/Footer";
import BackToTop from "./Reusables/BackToTop";

// =====================================
interface LayoutProps {
	children: React.ReactNode;
}

// =====================================
function Layout({ children }: LayoutProps) {
	return (
		<div className="flex flex-col min-h-screen w-full relative">
			{/* ============== HEADER ============== */}
			<header>
				<Navbar />
			</header>

			{/* ============== MAIN ============== */}
			<main className="flex-grow flex flex-col w-full relative z-0">
				{children}
			</main>

			{/* ============== FOOTER ============== */}
			<footer>
				<Footer />
			</footer>

			{/* ============== BACK TO TOP ============== */}
			<BackToTop />
		</div>
	);
}

export default Layout;
