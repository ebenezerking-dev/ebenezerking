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
				className="fixed bottom-[18rem] right-[1rem] z-[9999] text-orange-500 font-bold border-2 border-[#00ff91] rounded-l-[2rem] p-[1.2rem] bg-gradient-to-r from-[#00ff91]/50 via-[#000000] to-[#00ff91]/50 backdrop-blur-md transition-all duration-300 cursor-pointer hover:opacity-100 opacity-80"
				aria-label="Back to top"
			>
				<RiArrowUpDoubleLine size={20} />
			</button>
		)
	);
};

export default BackToTop;
