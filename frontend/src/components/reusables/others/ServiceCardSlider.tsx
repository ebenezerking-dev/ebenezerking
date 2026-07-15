// src/components/reusables/others/ServiceCardSlider.tsx
// this is a reusable component that renders a slider of service cards with animation

// ================== IMPORTS
import { motion } from "framer-motion";
import type { ReactElement } from "react";
import {
	cardContainerVariants,
	getCardVariants,
	type CardAnimation,
	viewportRepeat,
} from "../animations";

// ================== PROPS
type ServiceCardSliderProps<T> = {
	items: T[];
	renderItem: (item: T, index: number) => ReactElement;
	staggerDelay?: number;
	cardAnimation?: CardAnimation;
};

// ================== SERVICE CARD SLIDER
const ServiceCardSlider = <T,>({
	items,
	renderItem,
	staggerDelay = 0.1,
	cardAnimation = "fadeUp",
}: ServiceCardSliderProps<T>) => {
	const containerVariants = cardContainerVariants(staggerDelay);
	const cardItemVariants = getCardVariants(cardAnimation);

	return (
		<motion.div
			variants={containerVariants}
			initial="hidden"
			whileInView="visible"
			viewport={viewportRepeat}
			className="w-full pb-20 px-4"
		>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
				{items.map((item, index) => (
					<motion.div
						key={index}
						variants={cardItemVariants}
						whileHover={{
							y: -5,
							scale: 1.02,
							transition: {
								duration: 0.2,
								ease: "easeOut",
							},
						}}
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
