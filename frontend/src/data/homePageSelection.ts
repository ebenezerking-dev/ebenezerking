// src/data/homePageSelection.ts
// this is a data file that contains the selection of careers for the home page

// ================== IMPORTS
import {
	heroFullStackVariants,
	heroFitnessVariants,
	heroCustomerVariants,
} from "../components/reusables/animations";
// ================== HOME PAGE SELECTION
export const homePageSelection = [
	{
		id: 1,
		title: "full-stack developer",
		href: "full-stack",
		className: "developer",
		variants: heroFullStackVariants,
	},
	{
		id: 2,
		title: "fitness instructor",
		href: "fitness-instructor",
		className: "fitnessInstructor",
		variants: heroFitnessVariants,
	},
	{
		id: 3,
		title: "customer service & administration",
		href: "customer-service",
		className: "customerService",
		variants: heroCustomerVariants,
	},
];
