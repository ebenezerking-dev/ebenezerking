// src/routes/router.tsx
// this file contains the router configuration for the application

// ================== IMPORTS
import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import HomePageLayout from "../components/layouts/HomePageLayout";
import OtherPagesLayout from "../components/layouts/OtherPagesLayout";
import HomePage from "../pages/HomePage";
// ================== LAZY LOAD PAGES
const CareerPage = lazy(() => import("../pages/CareerPage"));

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
				element: (
					<Suspense
						fallback={
							<div className="flex min-h-screen items-center justify-center">
								<div className="text-white">Loading...</div>
							</div>
						}
					>
						<CareerPage />
					</Suspense>
				),
			},
		],
	},
]);
