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

	// =================================

	return (
		<motion.footer
			initial={footerMotion.initial}
			animate={footerMotion.animate}
			exit={footerMotion.exit}
			transition={footerTransition}
			className="footer__parent relative bg-black md:bg-black text-orange-500 md:text-[#dbcfff] w-full min-h-[130px] text-[1.1rem] py-[1rem] px-[1rem] flex flex-col lg:px-[2rem]md:text-[1.2rem] lg:text-[1.1rem]"
		>
			{/* ================ FOOTER CONTENTS ================ */}
			<div className="relative z-20">
				{/* =============== Contact Section =============== */}
				<div className="footer__contact flex flex-col items-end">
					<h6>Would you like to support my content?</h6>
					<p className="flex flex-col items-end">Hire me or recommend me</p>

					<a href="https://wa.me/message/UHRWC3UBMMB2E1">
						<FaWhatsappSquare
							size={40}
							className="mt-[0.4rem] text-orange-500 hover:bg-[#450693] hover:text-[#dbcfff]"
						/>
					</a>
				</div>

				{/* =============== Social Icons + Copyright =============== */}
				<div className="flex flex-col gap-2 mt-[0.6rem] lg:flex-row lg:justify-between">
					<nav>
						<ul>
							<li className="flex gap-2">
								<a
									href="https://x.com/dev_kingv2"
									target="_blank"
									rel="noopener noreferrer"
									aria-label="Twitter"
								>
									<span className="inline-flex items-center justify-center p-2 border border-transparent md:text-orange-500 hover:text-[#450693] hover:bg-[#dbcfff] rounded transition-all duration-300">
										<RiTwitterXLine className="text-[1rem] lg:text-[1.3rem]" />
									</span>
								</a>

								<a
									href="https://www.linkedin.com/in/ebenezer-kingv2"
									target="_blank"
									rel="noopener noreferrer"
									aria-label="LinkedIn"
								>
									<span className="inline-flex items-center justify-center p-2 border border-transparent md:text-orange-500 hover:text-[#450693] hover:bg-[#450693] hover:bg-[#dbcfff]  rounded transition-all duration-300">
										<FaLinkedin className="text-[1rem] lg:text-[1.3rem]" />
									</span>
								</a>

								<a
									href="https://github.com/ebenezerkingv2"
									target="_blank"
									rel="noopener noreferrer"
									aria-label="GitHub"
								>
									<span className="inline-flex items-center justify-center p-2 border border-transparent md:text-orange-500 hover:text-[#450693] hover:bg-[#450693] hover:bg-[#dbcfff]  rounded transition-all duration-300">
										<FaGithub className="text-[1rem] lg:text-[1.3rem]" />
									</span>
								</a>
							</li>
						</ul>
					</nav>
					{/* =============== Copyright / date =============== */}
					<div className="footer__date">
						&copy; {date}. designed &amp; built by Ebenezer King
					</div>
				</div>
			</div>
		</motion.footer>
	);
}

export default Footer;
