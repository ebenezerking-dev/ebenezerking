// =====================================
// src/Components/Reusables/Footer.jsx
// ===================================== ANIMATION CONFIG
import { motion } from "motion/react";
import { RiTwitterXLine } from "react-icons/ri";
import { FaLinkedin, FaGithub, FaWhatsappSquare } from "react-icons/fa";

// =====================================
const footerMotion = {
	initial: { y: 150, opacity: 1 },
	animate: { y: 0, opacity: 1 },
	exit: { y: 100, opacity: 0 },
};

const footerTransition = {
	duration: 1.5,
	ease: "easeOut",
} as const;

// ===================================== FOOTER COMPONENT
function Footer() {
	const date = new Date().getFullYear();

	return (
		<motion.footer
			initial={footerMotion.initial}
			animate={footerMotion.animate}
			exit={footerMotion.exit}
			transition={footerTransition}
			className="footer__parent relative bg-gradient-to-r from-[#000AFD] via-[#00FF91] to-[#000AFD] w-full py-[2rem] px-[1.5rem]"
		>
			<div className="relative z-20 max-w-7xl mx-auto w-full">
				{/* ===================================== MAIN FOOTER CONTENTS*/}
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 mb-8">
					{/* COLUMN ONE - RESUME */}
					<div>
						<h3 className="inline-block text-[#00ff91] font-bold text-xl bg-[#000000] px-2 rounded-[0.5rem] border-b-6 border-orange-500 hover:border-[#00ff91] mb-3 transition-colors duration-300">
							<a
								href="https://docs.google.com/document/d/1rMZx8aLk1ZitCwSRTK706o19mj5UgyeQGABCZt6eAJg/edit?usp=sharing"
								target="_blank"
								rel="noopener noreferrer"
							>
								Resume
							</a>
						</h3>
						<p className="text-[#22050c] text-md font-semibold leading-relaxed">
							Full-stack developer crafting meaningful digital experiences with
							React, Node.js, and modern web technologies.
						</p>
					</div>

					{/* COLUMN TWO - QUICK LINKS */}
					<div className="flex justify-start text-[#22050c] lg:justify-center">
						<div>
							<h6 className="relative font-bold mb-5 text-xl uppercase tracking-wider">
								Explore
								<span className="absolute left-1/2 -translate-x-1/2 bottom-[-0.2rem] h-[0.2rem] w-[40%] bg-red-500 rounded-full"></span>
							</h6>
							<ul className="space-y-2 text-lg font-semibold flex flex-col lg:items-center">
								{["About", "Projects", "Contact"].map((item) => (
									<li key={item}>
										<a
											href={`#${item.toLowerCase()}`}
											className="inline-block text-[#00ff91] font-bold text-xl bg-[#000000] px-2 rounded-[0.5rem] border-b-6 border-orange-500 hover:border-[#00ff91] transition-colors duration-300"
										>
											{item}
										</a>
									</li>
								))}
							</ul>
						</div>
					</div>

					{/* COLUMN THREE: CONTACT */}
					<div className="footer__contact flex flex-col items-end text-[#22050c]">
						<h6 className="relative font-bold mb-5 text-xl uppercase tracking-wider mb-3">
							Hire or recommend me
							<span className="absolute left-1/2 -translate-x-1/2 bottom-[-0.2rem] h-[0.2rem] w-[40%] bg-red-500 rounded-full"></span>
						</h6>
						<p className="text-[#22050c] text-md font-semibold mb-1">
							Get in touch!
						</p>
						<a
							href="https://wa.me/message/UHRWC3UBMMB2E1"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="Whatsapp"
							className="hover:scale-110 transition-transform duration-300"
						>
							<FaWhatsappSquare
								size={32}
								className="text-[#22050c] hover:text-[#00ff91] transition-colors"
							/>
						</a>
					</div>
				</div>

				{/* Bottom bar: Social + Copyright */}
				<div className="flex flex-col lg:flex-row lg:justify-between items-center gap-4 pt-6 border-t border-[#000AFD]/20 text-[#22050c]">
					<nav>
						<ul className="flex gap-1">
							{[
								{
									href: "https://x.com/a_devlin",
									icon: RiTwitterXLine,
									label: "Twitter",
								},
								{
									href: "https://www.linkedin.com/in/ebenezerking/",
									icon: FaLinkedin,
									label: "LinkedIn",
								},
								{
									href: "https://github.com/ebenezerkingv2",
									icon: FaGithub,
									label: "GitHub",
								},
							].map((social) => (
								<li key={social.label}>
									<a
										href={social.href}
										target="_blank"
										rel="noopener noreferrer"
										aria-label={social.label}
										className="inline-flex items-center justify-center p-2 hover:text-[#00ff91] transition-all duration-300"
									>
										<social.icon className="text-[1.5rem]" />
									</a>
								</li>
							))}
						</ul>
					</nav>

					<div className="footer__date text-sm text-center lg:text-right">
						&copy; {date}. Designed &amp; built by Ebenezer King
					</div>
				</div>
			</div>
		</motion.footer>
	);
}

export default Footer;
