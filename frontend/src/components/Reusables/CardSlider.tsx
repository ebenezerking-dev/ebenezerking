// =====================================
// src/Components/Reusables/CardSlider.tsx
// =====================================
import { motion } from "framer-motion";

// =====================================
type CardSliderProps<T> = {
	items: T[];
	renderItem: (item: T, index: number) => React.ReactElement;
};

// =====================================
const CardSlider = <T,>({ items, renderItem }: CardSliderProps<T>) => {
	return (
		<div className="w-full">
			<div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
				{items.map((item, index) => (
					<motion.div
						key={index}
						className="w-full flex flex-col"
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, amount: 0.2 }}
						transition={{ duration: 0.4 }}
						whileHover={{ scale: 0.98 }}
					>
						{renderItem(item, index)}
					</motion.div>
				))}
			</div>
		</div>
	);
};

export default CardSlider;
