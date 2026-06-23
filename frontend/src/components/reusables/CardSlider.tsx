// =====================================
// src/Components/Reusables/CardSlider.tsx (Fixed version)
// =====================================
import { motion } from "framer-motion";
import type { ReactElement } from "react";
import type { Variants } from "framer-motion";
import { viewportRepeat } from "../reusables/animations/sectionAnimations";

// =====================================
type CardSliderProps<T> = {
	items: T[];
	renderItem: (item: T, index: number) => ReactElement;
	staggerDelay?: number;
	cardAnimation?: "fadeUp" | "fadeLeft" | "scale";
};

// =====================================
const getCardVariants = (animationType: string): Variants => {
	switch (animationType) {
		case "fadeLeft":
			return {
				hidden: { opacity: 0, x: -30 },
				visible: {
					opacity: 1,
					x: 0,
					transition: { duration: 0.5, ease: "easeOut" },
				},
			};
		case "scale":
			return {
				hidden: { opacity: 0, scale: 0.9 },
				visible: {
					opacity: 1,
					scale: 1,
					transition: { duration: 0.5, ease: "easeOut" },
				},
			};
		case "fadeUp":
		default:
			return {
				hidden: { opacity: 0, y: 30 },
				visible: {
					opacity: 1,
					y: 0,
					transition: { duration: 0.5, ease: "easeOut" },
				},
			};
	}
};

const CardSlider = <T,>({
	items,
	renderItem,
	staggerDelay = 0.1,
	cardAnimation = "fadeUp",
}: CardSliderProps<T>) => {
	const cardContainerVariants: Variants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: staggerDelay,
				delayChildren: 0.2,
			},
		},
	};

	const cardItemVariants: Variants = getCardVariants(cardAnimation);

	return (
		<motion.div
			variants={cardContainerVariants}
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
							transition: { duration: 0.2, ease: "easeOut" },
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

export default CardSlider;
