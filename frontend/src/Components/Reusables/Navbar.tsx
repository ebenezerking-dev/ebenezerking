// =====================================
// src/Components/Navbar.tsx
// =====================================
import TimeDate from "./TimeDate";
import { useState } from "react";
import NavbarMenu from "./NavbarMenu";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";
import { easeInOut } from "framer-motion";
import { useNavbar } from "../Reusables/context/NavbarContext";

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
				className="navbar__parent fixed top-0 left-0 z-50 bg-[#00485d] w-full text-[1.5rem] flex flex-col px-[1rem] py-[0.3rem]"
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
								{isOpen ? <FaTimes size={43} /> : <GiHamburgerMenu size={43} />}
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
