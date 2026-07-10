// src/Components/reusables/NavbarMenu.tsx
// ================== IMPORTS
import { motion, AnimatePresence } from "framer-motion";
import {
	backdropVariants,
	mobileMenuVariants,
	mobileMenuItemVariants,
} from "./animations/sectionAnimations";
import type { NavigationItem } from "../../types/career";
// ================== PROPS
interface NavbarMenuProps {
	navigation: NavigationItem[];
	isOpen: boolean;
	toggleMenu: () => void;
	topOffset: number;
}

// ================== NAVBAR COMPONENT
export default function NavbarMenu({
	navigation,
	isOpen,
	toggleMenu,
	topOffset,
}: NavbarMenuProps) {
	return (
		<AnimatePresence>
			{isOpen && (
				<>
					{/* ================= BACKDROP */}
					<motion.div
						onClick={toggleMenu}
						variants={backdropVariants}
						initial="hidden"
						animate="visible"
						exit="exit"
						className="fixed inset-0 z-30 bg-black/50 backdrop-blur-sm cursor-pointer"
					/>

					{/* ================= MENU */}
					<motion.div
						variants={mobileMenuVariants}
						initial="hidden"
						animate="visible"
						exit="exit"
						className="fixed left-0 w-full z-40 bg-[linear-gradient(135deg,#020617,#000AFD,#020617)] text-lg font-bold shadow-2xl overflow-hidden"
						style={{
							top: `${topOffset}px`,
						}}
					>
						{/* ================= NAV UN-ORDERED LIST */}
						<ul className="nav-list text-center py-2">
							{navigation.map((item) => (
								<motion.li
									key={item.href}
									variants={mobileMenuItemVariants}
									className="nav-item group relative"
								>
									<a
										href={item.href}
										onClick={toggleMenu}
										className="nav-link block py-2 px-6 transition-colors duration-300 group-hover:text-[#00ff91]"
									>
										{item.label}
									</a>

									<div className="nav-divider absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-0.5 bg-linear-to-r from-transparent via-[#000AFD]/20 to-transparent transition-all duration-300 group-hover:via-[#00ff91] group-hover:shadow-[0_0_14px_rgba(0,255,145,0.8)]" />
								</motion.li>
							))}
						</ul>
					</motion.div>
				</>
			)}
		</AnimatePresence>
	);
}
