// =====================================
// src/Components/Reusables/CardSlider.tsx
// ===================================== CARD SLIDER COMPONENT
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// =====================================
type CardSliderProps<T> = {
	items: T[];
	renderItem: (item: T, index: number) => React.ReactElement;
	visibleCount: number;
};

const CardSlider = <T,>({
	items,
	renderItem,
	visibleCount,
}: CardSliderProps<T>) => {
	const [startIndex, setStartIndex] = useState(0);

	const handleNext = () => {
		const nextIndex = startIndex + visibleCount;
		if (nextIndex < items.length) {
			setStartIndex(nextIndex);
		} else {
			setStartIndex(0);
		}
	};

	const visibleItems = items.slice(startIndex, startIndex + visibleCount);

	return (
		<div className="flex flex-1 flex-col justify-center pb-[3rem] items-center gap-4 z-20 w-full">
			{/* ================= SLIDER "TV SCREEN" */}
			<div className="relative w-full p-4 overflow-hidden flex items-center justify-center">
				{/* ==================== GRID CARDS */}
				<AnimatePresence mode="wait">
					<motion.div
						key={startIndex}
						className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-6 items-stretch"
						initial={{ opacity: 0, filter: "blur(6px)" }}
						animate={{ opacity: 1, filter: "blur(0px)" }}
						exit={{ opacity: 0, filter: "blur(6px)" }}
						transition={{ duration: 0.4 }}
					>
						{visibleItems.map((item, index) => (
							<motion.div
								key={index}
								className="w-full flex flex-col"
								whileHover={{
									scale: 1.05,
								}}
								transition={{ type: "spring", stiffness: 300 }}
							>
								{renderItem(item, index)}
							</motion.div>
						))}
					</motion.div>
				</AnimatePresence>
			</div>

			{/* ================= MORE BUTTON */}
			{items.length > visibleCount && (
				<button
					onClick={handleNext}
					className="cardSlider__button bg-red-500 text-black font-bold hover:bg-orange-500 py-2 px-6 rounded-[0.5rem] transition-colors duration-300 border border-orange-500 cursor-pointer"
				>
					More
				</button>
			)}
		</div>
	);
};

export default CardSlider;
