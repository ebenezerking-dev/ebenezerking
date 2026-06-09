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
				className="fixed bottom-[4rem] lg:bottom-[7rem] right-[1rem] lg:right-[5rem] z-[9999] border-2 border-[#00ff91] rounded-l-[2rem] p-2 bg-transparent backdrop-blur-md transition-all duration-300 cursor-pointer hover:opacity-100 opacity-80"
				aria-label="Back to top"
			>
				<RiArrowUpDoubleLine size={32} className="text-[#00ff91] text-md font-bold" />
			</button>
		)
	);
};

export default BackToTop;
