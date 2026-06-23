// =====================================
// src/Components/Reusables/BackToTop.tsx
// =====================================
import { useEffect, useRef, useState } from "react";
import { RiArrowUpDoubleLine } from "react-icons/ri";

// ===================================== BACK TO TOP COMPONENT
const BackToTop = () => {
	const [isVisible, setIsVisible] = useState(false);

	const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

	useEffect(() => {
		const handleScroll = () => {
			setIsVisible(false);

			if (timeoutRef.current) {
				clearTimeout(timeoutRef.current);
			}

			timeoutRef.current = setTimeout(() => {
				if (window.scrollY > 300) {
					setIsVisible(true);
				}
			}, 200);
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);

			if (timeoutRef.current) {
				clearTimeout(timeoutRef.current);
			}
		};
	}, []);

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	return (
		isVisible && (
			<button
				onClick={scrollToTop}
				className="fixed bottom-16 lg:bottom-28 right-10 lg:right-12 z-9999 border-2 border-[#00ff91] rounded-l-4xl p-2 bg-transparent backdrop-blur-md transition-all duration-300 cursor-pointer hover:opacity-100 opacity-80"
				aria-label="Back to top"
			>
				<RiArrowUpDoubleLine className="text-[#00ff91] text-2xl sm:text-3xl md:text-4xl font-bold" />
			</button>
		)
	);
};

export default BackToTop;
