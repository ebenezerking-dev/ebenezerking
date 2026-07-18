// src/routes/router.tsx
// this file contains the router configuration for the application

// ================== IMPORTS
import { createBrowserRouter } from "react-router-dom";
import HomePageLayout from "../components/layouts/HomePageLayout";
import OtherPagesLayout from "../components/layouts/OtherPagesLayout";
import HomePage from "../pages/HomePage";
import CareerPage from "../pages/CareerPage";
// ================== ROUTER
export const router = createBrowserRouter([
	{
		element: <HomePageLayout />,
		children: [
			{
				path: "/",
				element: <HomePage />,
			},
		],
	},

	// OTHER PAGES LAYOUT
	{
		element: <OtherPagesLayout />,
		children: [
			{
				path: "/careers/:career",
				element: <CareerPage />,
			},
		],
	},
]);
