// src/components/reusables/others/Navbar.tsx
// ================== IMPORTS
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { NAVBAR_HEIGHT } from "../../../constants/layout";
import NavbarMenu from "../others/NavbarMenu";
import RippleButton from "../others/RippleButton";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";
import { easeInOut } from "framer-motion";
import type { NavigationItem } from "../../../types/career";

// ================== PROPS
interface NavbarProps {
	navigation: NavigationItem[];
}

// ================== ANIMATION CONFIG
const navbarMotion = {
	initial: { y: -150, opacity: 1 },
	animate: { y: 0, opacity: 1 },
	exit: { y: -100, opacity: 0 },
};

const navbarTransition = {
	duration: 1.5,
	ease: easeInOut,
};

// =====================================
const Navbar = ({ navigation }: NavbarProps) => {
	const [isOpen, setIsOpen] = useState(false);
	const [isLargeScreen, setIsLargeScreen] = useState(false);

	useEffect(() => {
		const checkScreenSize = () => {
			const largeScreen = window.innerWidth >= 1024;
			setIsLargeScreen(largeScreen);

			if (largeScreen) {
				setIsOpen(false);
			}
		};

		checkScreenSize();
		window.addEventListener("resize", checkScreenSize);

		return () => window.removeEventListener("resize", checkScreenSize);
	}, []);

	return (
		<>
			{/* ================================= NAVBAR ================================= */}
			<motion.nav
				initial={navbarMotion.initial}
				animate={navbarMotion.animate}
				exit={navbarMotion.exit}
				transition={navbarTransition}
				style={{ height: `${NAVBAR_HEIGHT}px` }}
				className="navbar__parent fixed w-full flex items-center top-0 left-0 z-50 bg-[linear-gradient(160deg,#7a19ff,#150036,#7a19ff)] px-6 border-[#000AFD]/30"
			>
				<div className="navbar__main relative flex justify-between items-center max-w-7xl mx-auto w-full min-w-0 overflow-x-clip px-4 sm:px-6 lg:px-6 lg:max-w-none">
					{/* ========================= LOGO  */}
					<div className="">
						<Link
							to="/"
							className="relative bg-black hover:bg-[#00ff91] w-fit mx-auto p-1 text-white hover:text-black border-x-6 border-[#00ff91] hover:border-orange-500 rounded-md text-2xl font-bold transition-all duration-300 hover:opacity-80 hover:tracking-wide"
						>
							Ebenezer
							<span className="absolute inset-0 w-full h-full -mt-1 rounded-md opacity-30 bg-linear-to-b from-transparent via-transparent to-gray-200" />
						</Link>
					</div>

					{/* ========================= DESKTOP MENU (visible on large screens) */}
					<div className="hidden lg:block">
						<ul className="flex justify-center gap-3 text-lg font-bold">
							{navigation.map((item) => (
								<li key={item.href}>
									<RippleButton href={item.href} target={item.target}>
										{item.label}
									</RippleButton>
								</li>
							))}
						</ul>
					</div>

					{/* ========================= MOBILE MENU BUTTON */}
					<div className="lg:hidden flex items-center text-white">
						<button onClick={() => setIsOpen(!isOpen)}>
							<motion.div
								initial={false}
								animate={{ rotate: isOpen ? 0 : 180 }}
								transition={{ duration: 0.3 }}
							>
								{isOpen ? (
									<FaTimes style={{ width: 36, height: 36 }} />
								) : (
									<GiHamburgerMenu style={{ width: 36, height: 36 }} />
								)}
							</motion.div>
						</button>
					</div>
				</div>
			</motion.nav>

			{/* ================================= MOBILE MENU (only visible when open) ================================= */}
			<NavbarMenu
				navigation={navigation}
				isOpen={isOpen && !isLargeScreen}
				toggleMenu={() => setIsOpen(false)}
			/>
		</>
	);
};

export default Navbar;
