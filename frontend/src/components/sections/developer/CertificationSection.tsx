// src/components/sections/developer/CertificationSection.tsx
// this is a section that renders the certification data for a career page
// ================== IMPORTS
import { useState } from "react";
import CareerSectionFrame from "../frames/shared/CareerSectionFrame";
import { motion } from "framer-motion";
import type { CertificationData, Theme } from "../../../types/career";
import SectionHeader from "../../reusables/others/SectionHeader";
import SectionSubtitle from "../../reusables/others/SectionSubtitle";
import BottomDivider from "../../reusables/others/BottomDivider";
import {
	viewportRepeat,
	developer,
	paragraphUp,
	certificatesImage,
	certificatesBodyStagger,
} from "../../reusables/animations";

// ================== PROPS
type CertificationSectionProps = {
	certifications: CertificationData;
	theme: Theme;
};

type SelectedCertificate = CertificationData["items"][number];

// ================== CERTIFICATIONS SECTION

const CertificationSection = ({
	certifications,
	theme,
}: CertificationSectionProps) => {
	const [selectedCertificate, setSelectedCertificate] =
		useState<SelectedCertificate | null>(null);

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
					{/* ==== */}
					{/* ============================== CERTIFICATIONS HEADER */}
					<SectionHeader title={certifications.title} />

					{/* ============================== CERTIFICATIONS BODY */}
					<motion.div className="body flex flex-col gap-8 w-full md:p-4 text-lg">
						{certifications.items.map((item) => {
							return (
								<motion.div
									key={`${item.title}-${item.issuer}`}
									variants={certificatesBodyStagger}
									initial="hidden"
									whileInView="visible"
									viewport={viewportRepeat}
									className="w-full max-w-2xl mx-auto"
								>
									{/* ========== TITLE */}
									<SectionSubtitle title={item.title} />

									{/* ========== ISSUER */}
									<motion.p
										variants={paragraphUp}
										className="mt-4 font-semibold"
									>
										{item.issuer}
									</motion.p>

									{/* ========== DATE ISSUED */}
									<motion.p
										variants={paragraphUp}
										className="mb-4 text-sm text-white/70"
									>
										{item.issuedDate}
									</motion.p>

									{/* ========== CREDENTIAL ID */}
									<motion.p
										variants={paragraphUp}
										className="mb-4 text-sm opacity-70"
									>
										{item.credentialId}
									</motion.p>

									{/* ========== CERTIFICATE IMAGE */}
									<motion.div
										variants={certificatesImage}
										initial="hidden"
										whileInView="visible"
										viewport={viewportRepeat}
										onClick={() => setSelectedCertificate(item)}
										className="group relative h-[300px] cursor-pointer overflow-hidden rounded-xl border-8 border-black"
									>
										<img
											src={item.image}
											alt={item.title}
											className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-102"
										/>

										{/* ========== CERTIFICATE IMAGE OVERLAY */}
										<div className="absolute inset-0 rounded-xl bg-linear-to-t from-black/30 via-black/10 to-transparent transition-opacity duration-300 group-hover:opacity-5" />
									</motion.div>
								</motion.div>
							);
						})}
					</motion.div>
				</motion.div>
			</motion.div>

			{/* ===================== CERTIFICATE FULL VIEW MODAL ===================== */}
			{selectedCertificate && (
				<div
					className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
					onClick={() => setSelectedCertificate(null)}
				>
					<img
						src={selectedCertificate.image}
						alt={selectedCertificate.title}
						className="max-h-[90vh] max-w-[90vw] rounded-xl"
						onClick={(e) => e.stopPropagation()}
					/>
				</div>
			)}
			{/* ===================== GLOWING BOTTOM DIVIDER ===================== */}
			<BottomDivider theme={theme} />
		</CareerSectionFrame>
	);
};
export default CertificationSection;
