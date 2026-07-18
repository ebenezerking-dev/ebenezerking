// src/components/reusables/others/Footer.jsx
// ================== IMPORTS
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { RiTwitterXLine } from "react-icons/ri";
import { FaLinkedin, FaGithub, FaWhatsappSquare } from "react-icons/fa";
import { footerCareerLinks } from "../../../data/footerCareerLinks";
import {
	viewportRepeat,
	footerLeft,
	footerRight,
	footerCenter,
	headerUnderline,
	homeCareerSpan,
} from "../animations";

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
	const MotionLink = motion(Link);

	return (
		<motion.footer
			initial={footerMotion.initial}
			animate={footerMotion.animate}
			exit={footerMotion.exit}
			transition={footerTransition}
			className="footer__parent relative bg-[linear-gradient(135deg,#020617,#000AFD,#020617)] w-full py-8 px-6"
		>
			<div className="relative z-20 max-w-7xl mx-auto w-full px-4 sm:px-6">
				{/* ===================================== MAIN FOOTER CONTENTS*/}
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 mb-8">
					{/* COLUMN ONE */}
					<motion.div
						variants={footerLeft}
						initial="hidden"
						whileInView="visible"
						viewport={viewportRepeat}
					>
						{/* =================== PARAGRAPH */}
						<p className="text-md leading-relaxed text-white">
							Get in touch:{" "}
							<motion.a
								href="mailto:contact@ebenezerking.com"
								className="relative text-lg hover:text-[#00FF91] transition-colors"
								initial="hidden"
								whileHover="visible"
							>
								contact@ebenezerking.com
								<motion.span
									variants={headerUnderline}
									className="absolute left-1/2 -translate-x-1/2 bottom-[-0.2rem] h-[0.2rem] bg-[#00FF91] rounded-full"
								/>
							</motion.a>
						</p>
					</motion.div>

					{/* ==================== COLUMN TWO - CAREER PATHS */}
					<motion.div
						variants={footerCenter}
						initial="hidden"
						whileInView="visible"
						viewport={viewportRepeat}
						className="flex justify-start lg:justify-center"
					>
						<div>
							<h6 className="relative  inline-block font-bold mb-5 text-xl uppercase tracking-wider">
								Career Paths
								<span className="absolute w-[30%] left-1/2 -translate-x-1/2 bottom-[-0.2rem] h-[0.2rem] bg-orange-500 rounded-full" />
							</h6>
							<ul className="space-y-2">
								{footerCareerLinks.map((career) => (
									<li key={career.href}>
										<MotionLink
											to={`/careers/${career.href}`}
											initial="initial"
											whileHover="hover"
											className="group flex items-center gap-2"
										>
											<motion.span
												variants={homeCareerSpan}
												className="text-orange-500 group-hover:text-[#00FF91]"
											>
												❖
											</motion.span>
											<span className="group-hover:text-[#00FF91] transition-colors">
												{career.title}
											</span>
										</MotionLink>
									</li>
								))}
							</ul>
						</div>
					</motion.div>

					{/* ==================== COLUMN THREE: CONTACT */}
					<motion.div
						variants={footerRight}
						initial="hidden"
						whileInView="visible"
						viewport={viewportRepeat}
						className="footer__contact flex flex-col items-end"
					>
						<h6 className="relative font-bold mb-5 text-xl uppercase tracking-wider">
							Hire or recommend me
							<span className="absolute left-1/2 -translate-x-1/2 bottom-[-0.2rem] h-[0.2rem] w-[40%] bg-red-500 rounded-full"></span>
						</h6>
						<p className="text-md font-semibold mb-1 text-white/80">
							Get in touch!
						</p>
						<a
							href="https://wa.me/message/UHRWC3UBMMB2E1"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="Whatsapp"
							className="hover:scale-110 hover:text-[#00ff91] transition-transform duration-300 text-white/80"
						>
							<FaWhatsappSquare size={32} />
						</a>
					</motion.div>
				</div>

				{/* ==================== BOTTOM: SOCIALS + COPYRIGHT */}
				<div className="flex flex-col lg:flex-row lg:justify-between items-center gap-4 pt-6 border-t border-[#000AFD]/80">
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
									href: "https://github.com/ebenezerking-dev",
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
										className="inline-flex items-center justify-center p-2 hover:text-[#00ff91] transition-all duration-300 text-white/80"
									>
										<social.icon className="text-[1.5rem]" />
									</a>
								</li>
							))}
						</ul>
					</nav>

					<div className="footer__date text-sm text-center lg:text-right text-white/80">
						&copy; {date}. Designed &amp; built by Ebenezer King
					</div>
				</div>
			</div>
		</motion.footer>
	);
}

export default Footer;
