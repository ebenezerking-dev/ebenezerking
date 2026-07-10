// src/components/layouts/HomePageLayout.tsx
// displays the layout for the home page without the header and footer

// ================== IMPORTS
import { Outlet } from "react-router-dom";
// ================== HOME PAGE LAYOUT
const HomePageLayout = () => {
	return (
		<main className="min-h-screen">
			<Outlet />
		</main>
	);
};
export default HomePageLayout;
