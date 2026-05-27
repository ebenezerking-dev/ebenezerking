// =====================================
// src/Components/NavbarMenu.tsx
// =====================================
interface NavbarMenuProps {
	isOpen: boolean;
	toggleMenu: () => void;
	topOffset: number;
}

// ===================================== MENU COMPONENT
export default function NavbarMenu({
	isOpen,
	toggleMenu,
	topOffset,
}: NavbarMenuProps) {
	return (
		<>
			{/* ================= BACKDROP */}
			<div
				onClick={toggleMenu}
				className={`fixed inset-0 z-30 bg-black/10 backdrop-blur-[2px] transition-opacity duration-300 ${
					isOpen
						? "opacity-100 pointer-events-auto"
						: "opacity-0 pointer-events-none"
				}`}
			/>
			{/* ================= MENU */}
			<div
				className={`fixed left-0 w-full z-40 bg-black text-[1.1rem] font-bold shadow-lg transition-all duration-300 ease-in-out ${
					isOpen
						? "translate-y-0 opacity-100 pointer-events-auto"
						: "-translate-y-6 opacity-0 pointer-events-none"
				}`}
				style={{
					top: `${topOffset}px`,
				}}
			>
				{/* ================= NAV UN-ORDERED LIST */}
				<ul className="nav-list text-center">
					{/* ================= LIST */}
					<li className="nav-item nav-item-hover group">
						<a href="#about" onClick={toggleMenu} className="nav-link">
							about
						</a>
						<div className="nav-divider" />
					</li>

					<li className="nav-item nav-item-hover group">
						<a href="#projects" onClick={toggleMenu} className="nav-link">
							projects
						</a>
						<div className="nav-divider" />
					</li>

					<li className="nav-item nav-item-hover group">
						<a href="#services" onClick={toggleMenu} className="nav-link">
							services
						</a>
						<div className="nav-divider" />
					</li>

					<li className="nav-item nav-item-hover group">
						<a href="#contact" onClick={toggleMenu} className="nav-link">
							contact
						</a>
						<div className="nav-divider" />
					</li>
				</ul>
			</div>
		</>
	);
}
