// src/data/homePageSelection.ts
// this is a data file that contains the selection of careers for the home page

// ================== IMPORTS
import {
	developerCareer,
	fitnessCareer,
	customerServiceCareer,
} from "../components/reusables/animations/developer";
// ================== HOME PAGE SELECTION
export const homePageSelection = [
	{
		id: 1,
		title: "full-stack developer",
		href: "full-stack",
		className: "developer",
		variants: developerCareer,
	},
	{
		id: 2,
		title: "fitness instructor",
		href: "fitness-instructor",
		className: "fitnessInstructor",
		variants: fitnessCareer,
	},
	{
		id: 3,
		title: "customer service & administration",
		href: "customer-service",
		className: "customerService",
		variants: customerServiceCareer,
	},
];
