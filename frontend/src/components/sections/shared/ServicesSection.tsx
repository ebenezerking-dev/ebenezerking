// src/components/sections/shared/ServicesSection.tsx
// This section renders the services for a career page.

// ================== IMPORTS
import { useState } from "react";
import { motion } from "framer-motion";
import CareerSectionFrame from "../frames/CareerSectionFrame";
import BottomDivider from "../../reusables/others/BottomDivider";
import SectionHeader from "../../reusables/others/SectionHeader";
import ServiceCardSlider from "../../reusables/others/ServiceCardSlider";
import ServiceCard from "../../reusables/others/ServiceCard";
import ServicePreviewModal from "../../reusables/modals/MediaGalleryModal";
import { developer, viewportRepeat } from "../../reusables/animations";
import type { Service, ServiceData, Theme } from "../../../types/career";

// ================== PROPS
interface ServicesSectionProps {
	services: ServiceData;
	theme: Theme;
}

// ================== SERVICES SECTION
export default function ServicesSection({
	services,
	theme,
}: ServicesSectionProps) {
	const [selectedService, setSelectedService] = useState<Service | null>(null);

	const getServiceKey = (service: Service): string => {
		if ("id" in service && service.id !== undefined) {
			return String(service.id);
		}
		return service.title;
	};

	return (
		<CareerSectionFrame id="services" theme={theme}>
			<motion.div
				variants={developer}
				initial="hidden"
				whileInView="visible"
				viewport={viewportRepeat}
				className="parent relative flex h-auto w-full flex-col overflow-hidden"
			>
				{/* ============================== SERVICES WRAPPER */}
				<div className="wrapper mx-auto w-full md:w-[90%] lg:w-[70%]">
					{/* ============================== HEADER */}
					<SectionHeader title={services.title} theme={theme} />

					{/* ============================== SERVICE CARDS */}
					<ServiceCardSlider
						items={services.items}
						renderItem={(service) => (
							<ServiceCard
								service={service}
								theme={theme}
								onPreview={setSelectedService}
							/>
						)}
					/>
				</div>

				{/* ============================== PREVIEW MODAL */}
				<ServicePreviewModal
					key={selectedService ? getServiceKey(selectedService) : "no-service"}
					service={selectedService}
					onClose={() => setSelectedService(null)}
					theme={theme}
				/>

				{/* ============================== DIVIDER */}
				<BottomDivider theme={theme} />
			</motion.div>
		</CareerSectionFrame>
	);
}
