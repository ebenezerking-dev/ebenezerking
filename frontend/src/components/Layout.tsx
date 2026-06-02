// =====================================
// src/Components/Layout.tsx
// =====================================
import Navbar from "./reusables/Navbar";
import Footer from "./reusables/Footer";
import BackToTop from "./reusables/BackToTop";

interface LayoutProps {
	children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
	return (
		<div className="flex flex-col min-h-screen w-full relative">
			{/* HEADER */}
			<header>
				<Navbar />
			</header>

			{/* MAIN */}
			<main className="flex-grow flex flex-col w-full relative z-0 pt-[var(--navbar-height)]">
				{children}
			</main>

			{/* FOOTER */}
			<footer>
				<Footer />
			</footer>

			{/* BACK TO TOP */}
			<BackToTop />
		</div>
	);
}

export default Layout;
