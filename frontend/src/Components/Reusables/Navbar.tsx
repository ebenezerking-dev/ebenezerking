// =====================================
// src/Components/Navbar.tsx
// =====================================
import TimeDate from "./TimeDate";
import { useState } from "react";
import NavbarMenu from "./NavbarMenu";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import { useNavbar } from "./context/NavbarContext";
import { motion } from "motion/react";

// ===================================== ANIMATION CONFIG
const navbarMotion = {
	initial: { y: -150, opacity: 1 },
	animate: { y: 0, opacity: 1 },
	exit: { y: -100, opacity: 0 },
};

const navbarTransition = {
	duration: 1.5,
	easing: "ease-out",
};

// ===================================== NAVBAR COMPONENT
function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	const { navbarRef, navbarHeight } = useNavbar();

	return (
		<>
			{/* ================================= NAVBAR ================================= */}
			<motion.nav
				ref={navbarRef}
				initial={navbarMotion.initial}
				animate={navbarMotion.animate}
				exit={navbarMotion.exit}
				transition={navbarTransition}
				className="navbar__parent fixed top-0 left-0 z-50 bg-black w-full text-[1.1rem] flex flex-col px-[1rem] py-[0.5rem]"
			>
				<div className="navbar__main relative flex justify-between items-end">
					<div>
						<TimeDate className="timeDate text-[1rem]" />
					</div>

					<div className="navbar__button flex items-center gap-4">
						<button onClick={() => setIsOpen(!isOpen)}>
							<motion.div
								initial={false}
								animate={{ rotate: isOpen ? 0 : 180 }}
								transition={{ duration: 0.3 }}
							>
								{isOpen ? <FaTimes size={32} /> : <GiHamburgerMenu size={32} />}
							</motion.div>
						</button>
					</div>
				</div>
			</motion.nav>

			{/* ================================= MENU ================================= */}
			<NavbarMenu
				isOpen={isOpen}
				toggleMenu={() => setIsOpen(false)}
				topOffset={navbarHeight}
			/>
		</>
	);
}

export default Navbar;
