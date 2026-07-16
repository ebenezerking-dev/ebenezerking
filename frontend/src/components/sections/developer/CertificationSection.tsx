// src/components/sections/developer/CertificationSection.tsx
// this is a section that renders the certification data for a career page
// ================== IMPORTS
import CareerSectionFrame from "../frames/shared/CareerSectionFrame";
import { motion } from "framer-motion";
import type { CertificationData, Theme } from "../../../types/career";
import {
	viewportRepeat,
	developer,
	header,
	headerUnderline,
	developerBody,
	paragraphUp,
	certificatesImage,
	bottomDivider,
} from "../../reusables/animations/developerSc";

// ================== PROPS
type CertificationSectionProps = {
	certifications: CertificationData;
	theme: Theme;
};

// ================== CERTIFICATIONS SECTION
const CertificationSection = ({
	certifications,
	theme,
}: CertificationSectionProps) => {
	return (
		<CareerSectionFrame id="certifications" theme={theme}>
			<motion.div
				variants={developer}
				initial="hidden"
				whileInView="visible"
				viewport={viewportRepeat}
				className="certificationsSection__parent relative h-auto w-full flex flex-col overflow-hidden px-4"
			>
				{" "}
				{/* ============================== CERTIFICATIONS WRAPPER */}
				<motion.div className="wrapper w-full md:w-[90%] lg:w-[70%] mx-auto pb-20">
					{/* ============================== CERTIFICATIONS HEADER */}
					<motion.div variants={header} className="text-left px-4">
						<div className="header inline-block uppercase font-unna font-bold text-[1rem] mb-56 bg-[#000000] p-3 rounded-2xl">
							<h2 className="relative inline-block">
								{certifications.title}
								<motion.span
									variants={headerUnderline}
									initial="hidden"
									whileInView="visible"
									viewport={viewportRepeat}
									className="absolute left-1/2 -translate-x-1/2 bottom-[-0.2rem] h-[0.2rem] w-[30%] bg-orange-500 rounded-full"
								/>
							</h2>
						</div>
					</motion.div>
					{/* ============================== CERTIFICATIONS BODY */}
					<motion.div
						variants={developerBody}
						className="body flex flex-col gap-8 w-full md:p-4 text-lg"
					>
						{certifications.items.map((item) => (
							<div
								key={`${item.title}-${item.issuer}`}
								className="w-full max-w-2xl mx-auto"
							>
								{/* ========== TITLE */}
								<motion.div variants={header} className="flex justify-center">
									<div className="relative z-10 inline-flex bg-[#000000] px-3 pt-1 pb-3 rounded-2xl">
										<h3 className="relative inline-block">
											{item.title}
											<span className="absolute w-[30%] left-1/2 -translate-x-1/2 bottom-[-0.2rem] h-[0.2rem] bg-orange-500 rounded-full" />
										</h3>
									</div>
								</motion.div>
								{/* ========== ISSUER */}
								<motion.p variants={paragraphUp} className="mt-4 font-semibold">
									{item.issuer}
								</motion.p>
								{/* ========== DATE ISSUED */}
								<motion.p
									variants={paragraphUp}
									className="text-sm text-white/70 mb-4"
								>
									{item.issuedDate}
								</motion.p>
								{/* ========== CREDENTIAL ID */}
								<motion.p
									variants={paragraphUp}
									className="text-sm opacity-70 mb-4"
								>
									{item.credentialId}
								</motion.p>
								{/* ========== CERTIFICATE IMAGE */}
								<motion.div
									variants={certificatesImage}
									initial="hidden"
									whileInView="visible"
									viewport={viewportRepeat}
									transition={{ delay: 0.3 }}
									className="relative overflow-hidden rounded-xl group"
								>
									<img
										src={item.image}
										alt={item.title}
										className="w-full h-full object-contain rounded-xl"
									/>
									{/* ========== CERTIFICATE IMAGE OVERLAY */}
									<div className="absolute inset-0 rounded-xl bg-linear-to-t from-black/30 via-black/10 to-transparent transition-opacity duration-300 group-hover:opacity-5" />
									{/* <div className="absolute inset-0 rounded-xl bg-linear-to-t from-black/40 via-black/20 to-transparent" /> */}
								</motion.div>
							</div>
						))}
					</motion.div>
				</motion.div>
			</motion.div>
			{/* ===================== GLOWING BOTTOM DIVIDER ===================== */}
			<motion.div
				variants={bottomDivider}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: false, amount: 0.2 }}
				className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-0.5 bg-linear-to-r from-transparent via-orange-500 to-transparent origin-left"
			/>
		</CareerSectionFrame>
	);
};
export default CertificationSection;
