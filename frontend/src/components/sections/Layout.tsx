// =====================================
// src/components/sections/Layout.tsx
// =====================================
import Navbar from "../reusables/Navbar";
import Footer from "../reusables/Footer";
import BackToTop from "../reusables/BackToTop";

// =====================================
interface LayoutProps {
	children: React.ReactNode;
}

// =====================================
function Layout({ children }: LayoutProps) {
	return (
		<div className="flex flex-col min-h-screen relative">
			{/* =================== HEADER */}
			<header>
				<Navbar />
			</header>

			{/* =================== MAIN */}
			<main className="w-full grow flex flex-col relative z-0 pt-(--navbar-height)">
				{children}
			</main>

			{/* =================== FOOTER */}
			<footer className="w-full relative z-0">
				<Footer />
			</footer>

			{/* =================== BACK TO TOP */}
			<BackToTop />
		</div>
	);
}

export default Layout;
