// src/data/careers/customerService.ts
// This data file that contains the career data for the customerService career

// ================== IMPORTS
import type { CareerData } from "../../types/career";
import { images } from "../../data/media";

// ================== CAREER DATA EXPORTS
export const customerServiceData: CareerData = {
	slug: "customer-service",
	title: "Customer Service & Administration",

	navigation: [
		{
			label: "About",
			href: "#about",
		},
		{
			label: "Projects",
			href: "#projects",
		},
		{
			label: "Services",
			href: "#services",
		},
		{
			label: "Contact",
			href: "#contact",
		},
		{
			label: "Resume",
			href: "https://docs.google.com/document/d/1SGLSrkRcN4uuQJqzlTevaMxsuXwHaDXGh-izRNJoASE/edit?tab=t.0",
			target: "_blank",
		},
	],

	theme: {
		primary: "#00FF91",
		secondary: "#111111",
		accent: "#ffffff",
		background: "#020617",
		surface: "#000000",
		gradientAngle: "160deg",
		gradientFrom: "#150036",
		gradientVia: "#150036",
		gradientTo: "#f34ef3",
		divider: "#000AFD",
		underline: "#f97316",
	},

	hero: {
		title: "Customer Service & Administration",
		subtitle: "Providing exceptional support and administrative solutions.",
		heroMedia: [
			{
				type: "image",
				src: images.careers.customerService.heroPoster,
			},
		],
		button: {
			label: "Download Resume",
			href: "/resume/customerService.pdf",
			download: true,
		},
	},

	about: {
		title: "I am Ebenezer.",
		intro: "I listen. I solve. I support.",
		paragraphs: [
			"I believe great customer service begins with listening. Every interaction is an opportunity to understand a customer's needs, provide clear solutions, and create a positive experience built on professionalism, patience, and respect.",

			"With experience across customer service, front desk operations, administration, retail, and dispatch coordination in both the United Kingdom and Nigeria, I've supported customers and teams in fast-paced environments where communication, organisation, and attention to detail are essential.",

			"I'm comfortable handling enquiries, resolving concerns, coordinating daily operations, and ensuring customers feel valued throughout their journey. I take pride in remaining calm under pressure while delivering efficient support and building lasting relationships based on trust.",

			"Whether assisting customers face-to-face, over the phone, or behind the scenes, my goal is always the same: to provide dependable service, contribute to smooth business operations, and leave every customer with a positive impression.",
		],
	},

	skills: {
		title: "My Professional Toolkit",
		items: [
			{ name: "Customer Service" },
			{ name: "Administrative Support" },
			{ name: "Front Desk Operations" },
			{ name: "Telephone Support" },
			{ name: "Appointment Scheduling" },
			{ name: "Complaint Resolution" },
			{ name: "Client Relationship Management" },
			{ name: "Reception Duties" },
			{ name: "Data & Record Management" },
			{ name: "Google Workspace" },
			{ name: "Microsoft Office" },
			{ name: "Sales Support" },
		],
	},

	experience: {
		title: "Work Experience",
		items: [
			{
				company: "Fitness Options Prestige",
				role: "Fitness Trainer",
				duration: "2019 - 2021",
				description: [
					"Delivered exceptional customer service while supporting members throughout their fitness journeys.",
					"Assisted with new member onboarding, consultations, and appointment scheduling.",
					"Maintained a safe, clean, and welcoming gym environment for members and visitors.",
					"Resolved member enquiries professionally while building positive, long-term relationships.",
					"Supported promotional activities and member engagement initiatives to enhance the customer experience.",
				],
			},
			{
				company: "Easy Gym",
				role: "Personal Trainer",
				duration: "2017 - 2018",
				description: [
					"Registered new members and introduced them to gym facilities, equipment, and safety procedures.",
					"Scheduled appointments and managed personal training sessions efficiently.",
					"Answered customer enquiries and assisted members with fitness-related questions.",
					"Processed customer payments and handled member concerns with professionalism.",
					"Built strong customer relationships through approachable communication and excellent service.",
				],
			},
			{
				company: "Ideal Furniture",
				role: "Showroom Assistant",
				duration: "2015 - 2017",
				description: [
					"Assisted customers in selecting furniture that matched their needs, preferences, and budgets.",
					"Guided customers through the showroom while explaining product features and available options.",
					"Maintained attractive showroom displays to enhance the shopping experience.",
					"Prepared products for showroom presentation and coordinated customer deliveries.",
					"Maintained a clean, organised, and welcoming retail environment.",
				],
			},
			{
				company: "Bluebird Cars",
				role: "Customer Service Dispatcher",
				duration: "2013 - 2015",
				description: [
					"Answered customer calls for taxi bookings, enquiries, and service requests.",
					"Coordinated taxi dispatch operations to ensure efficient driver allocation and timely pickups.",
					"Resolved customer complaints professionally while maintaining high service standards.",
					"Communicated effectively with drivers to ensure accurate routing and smooth operations.",
					"Maintained booking records and dispatch information in a fast-paced environment.",
				],
			},
		],
	},

	services: {
		title: "Services I Can Offer You",
		items: [
			{
				title: "Customer Support",
				description:
					"Professional customer support across phone, email, and face-to-face interactions. I handle enquiries, resolve issues, and ensure every customer receives a positive and efficient service experience.",
			},
			{
				title: "Front Desk & Reception",
				description:
					"I provide welcoming front desk support by greeting visitors, managing appointments, answering calls, directing enquiries, and ensuring smooth day-to-day reception operations.",
			},
			{
				title: "Administrative Support",
				description:
					"Reliable administrative assistance including document management, data entry, scheduling, record keeping, calendar coordination, and general office organisation to keep business operations running efficiently.",
			},
			{
				title: "Appointment & Calendar Management",
				description:
					"I coordinate appointments, bookings, and schedules while maintaining organised calendars, reducing scheduling conflicts, and ensuring clients and team members stay informed.",
			},
			{
				title: "Customer Relationship Management",
				description:
					"Focused on building long-term customer relationships through active listening, professional communication, timely follow-ups, and effective complaint resolution that promotes customer satisfaction and loyalty.",
			},
			{
				title: "Retail & Sales Support",
				description:
					"I assist customers with product enquiries, showroom presentation, payment processing, and sales support while delivering an engaging customer experience that contributes to business growth.",
			},
		],
	},

	contact: {
		title: "Let's Connect",
		formTitle: "Get in Touch",
		description:
			"I'm available for customer service and administrative opportunities.",
		submitLabel: "Send Inquiry",
	},
};
