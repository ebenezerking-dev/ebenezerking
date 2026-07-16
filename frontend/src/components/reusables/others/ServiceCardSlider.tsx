// src/components/reusables/others/ServiceCardSlider.tsx
// this is a reusable component that renders a slider of service cards with animation

// ================== IMPORTS
import { motion } from "framer-motion";
import type { ReactElement } from "react";
import {
	serviceCardContainer,
	cardUpScale,
	cardHover,
	viewportRepeat,
} from "../animations/developerSc";

// ================== PROPS
type ServiceCardSliderProps<T> = {
	items: T[];
	renderItem: (item: T, index: number) => ReactElement;
};

// ================== SERVICE CARD SLIDER
const ServiceCardSlider = <T,>({
	items,
	renderItem,
}: ServiceCardSliderProps<T>) => {
	return (
		<motion.div
			variants={serviceCardContainer}
			initial="hidden"
			whileInView="visible"
			viewport={viewportRepeat}
			className="w-full pb-20 px-4"
		>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
				{items.map((item, index) => (
					<motion.div
						key={index}
						variants={cardUpScale}
						whileHover={cardHover}
						className="w-full flex flex-col"
					>
						{renderItem(item, index)}
					</motion.div>
				))}
			</div>
		</motion.div>
	);
};

export default ServiceCardSlider;
