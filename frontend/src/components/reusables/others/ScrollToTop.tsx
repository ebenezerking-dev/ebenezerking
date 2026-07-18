// src/components/reusables/others/ScrollToTop.tsx

// ================== IMPORTS
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// ===================================== SCROLL ROUTE DETECTOR TO TOP COMPONENT
const ScrollToTop = () => {
	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	}, [pathname]);

	return null;
};

export default ScrollToTop;
