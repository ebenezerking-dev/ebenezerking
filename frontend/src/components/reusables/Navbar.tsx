// =====================================
// src/Components/Navbar.tsx
// =====================================
import { useState, useEffect } from "react";
import NavbarMenu from "./NavbarMenu";
import RippleButton from "../reusables/RippleButton";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";
import { easeInOut } from "framer-motion";
import { useNavbar } from "./context/NavbarContext";
import logoCom from "../../Assets/logoCom.webp";

// ===================================== ANIMATION CONFIG
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
function Navbar() {
	const [isOpen, setIsOpen] = useState(false);
	const [isLargeScreen, setIsLargeScreen] = useState(false);

	const { navbarRef, navbarHeight } = useNavbar();

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
				ref={navbarRef}
				initial={navbarMotion.initial}
				animate={navbarMotion.animate}
				exit={navbarMotion.exit}
				transition={navbarTransition}
				className="navbar__parent fixed top-0 left-0 z-50 bg-gradient-to-r from-[#000AFD] via-[#00FF91] to-[#000AFD] w-full flex flex-col px-[1rem] py-[0.3rem] lg:py-[0.5rem] border-b-12 border-[#000AFD]/30"
			>
				<div className="navbar__main relative flex justify-between items-center max-w-7xl mx-auto w-full">
					{/* ========================= LOGO  */}
					<div>
						<img
							src={logoCom}
							alt="logo"
							className="w-25 bg-[#000000] p-3 rounded-[1rem]"
						/>
					</div>

					{/* ========================= DESKTOP MENU (visible on large screens) */}
					<div className="hidden lg:block">
						<ul className="flex justify-center gap-3 text-lg font-bold">
							<li>
								<RippleButton href="#about">about</RippleButton>
							</li>
							<li>
								<RippleButton href="#projects">projects</RippleButton>
							</li>
							<li>
								<RippleButton href="#services">services</RippleButton>
							</li>
							<li>
								<RippleButton href="#contact">contact</RippleButton>
							</li>
						</ul>
					</div>

					{/* ========================= MOBILE MENU BUTTON (visible on medium and below) */}
					<div className="lg:hidden flex items-center">
						<button onClick={() => setIsOpen(!isOpen)}>
							<motion.div
								initial={false}
								animate={{ rotate: isOpen ? 0 : 180 }}
								transition={{ duration: 0.3 }}
							>
								{isOpen ? <FaTimes size={43} /> : <GiHamburgerMenu size={43} />}
							</motion.div>
						</button>
					</div>
				</div>
			</motion.nav>

			{/* ================================= MOBILE MENU (only visible when open) ================================= */}
			<NavbarMenu
				isOpen={isOpen && !isLargeScreen}
				toggleMenu={() => setIsOpen(false)}
				topOffset={navbarHeight}
			/>
		</>
	);
}

export default Navbar;
