// src/data/careers/fitness.ts

// ================== CAREER DATA EXPORTS
export const fitnessData = {
	slug: "fitness-instructor",
	title: "Fitness Instructor",

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
	],

	theme: {
		primary: "#00FF91",
		secondary: "#111111",
		accent: "#ffffff",
		background: "#020617",
		surface: "#000000",
		gradientFrom: "#020617",
		gradientVia: "#000AFD",
		gradientTo: "#020617",
		divider: "#000AFD",
		underline: "#f97316",
	},

	hero: {
		greeting: "Hello, I'm Ebenezer.",
		title: "Fitness Instructor",
		subtitle:
			"Empowering individuals to achieve their health and wellness goals.",
		description: "...",
		cta: "View Projects",
		heroImage: "/images/fitness/hero.png",
	},

	about: {
		heading: "About Me",
		title: "I am Ebenezer.",
		intro: "I coach. I motivate. I transform.",
		paragraphs: [
			"I turn my ideas into modern digital experiences by combining thoughtful design, clean code architecture, and problem-solving to build products people enjoy using.",

			"From responsive front-end interfaces to scalable backend systems, I build and manage full-stack web applications focused on performance, usability, and real business impact.",
		],
	},

	skills: {
		title: "My Technical Toolkit",
		items: [
			{
				name: "React",
			},
			{
				name: "TypeScript",
			},
			{
				name: "JavaScript",
			},
			{
				name: "Tailwind CSS",
			},
			{
				name: "Material UI",
			},
			{
				name: "Node.js",
			},
			{
				name: "Express",
			},
			{
				name: "MongoDB",
			},
			{
				name: "PostgreSQL",
			},
			{
				name: "Cloudinary",
			},
			{
				name: "Git",
			},
			{
				name: "Github",
			},
			{
				name: "Figma",
			},
			{
				name: "Vercel",
			},
			{
				name: "Netlify",
			},
			{
				name: "Render",
			},
		],
	},

	experience: {
		title: "Work experience",
		items: [
			{
				company: "Freelance",
				role: "Frontend Developer",
				duration: "2024 - Present",
				description: [
					"Developed responsive websites",
					"Worked with React and TypeScript",
					"Created reusable component libraries",
				],
			},
			{
				company: "Freelance",
				role: "Backend Developer",
				duration: "2025 - Present",
				description: [
					"Developed Restful APIs",
					"Worked with Node.js and Express",
					"Debugged and optimized database queries",
				],
			},
		],
	},

	projects: {
		title: "Featured projects.",
		items: [
			// Project 1 - Velly
			{
				title: "Velly",
				description: "...",
				images: "...",
				technologies: ["..."],
				github: "https://github.com/ebenezerkingv2/kingv2",
				live: "https://kingv2.vercel.app/",
			},
			// Project 2 - Portfolio
			{
				title: "Portfolio",
				description: "A personal portfolio website to showcase my career work.",
				images: "...",
				technologies: [
					"React",
					"JavaScript",
					"TypeScript",
					"TailwindCSS",
					"Express.js",
					"Node.js",
					"MongoDB",
					"Cloudinary",
				],
				github: "",
				live: "",
			},
			// Project 3 - Taxlator
			{
				title: "Taxlator",
				description:
					"A tax calculator app with real-time updates and calculations.",
				images: "...",
				technologies: [
					"React",
					"JavaScript",
					"TypeScript",
					"TailwindCSS",
					"Express.js",
					"Node.js",
					"MongoDB",
				],
				github: "https://github.com/ebenezerkingv2/taxlatorV2_frontend",
				live: "https://taxlator-v2.vercel.app/",
			},
		],
	},

	services: {
		title: "Services i can offer you.",
		items: [
			{
				title: "Web Development",
				description:
					"Build responsive, modern React apps with reusable components and smooth animations.",
			},
			{
				title: "Back-End Development",
				description:
					"Create secure, scalable APIs and server logic using Node.js, Express, MongoDB or PostgreSQL.",
			},
			{
				title: "Full-Stack Solutions",
				description:
					"Deliver end-to-end applications: e-commerce platforms, real-time apps, and CMS solutions.",
			},
			{
				title: "Code Review & Optimization",
				description:
					"Audit existing code for performance, fix inefficiencies, and improve maintainability.",
			},
			{
				title: "Code Revamp & Modernization",
				description:
					"Refactor or rebuild frontend and backend code for better structure, scalability, and maintainability.",
			},
			{
				title: "Deployment & Maintenance",
				description:
					"Deploy on AWS, Vercel, Netlify, or custom domains, optimize performance, and maintain your apps.",
			},
			{
				title: "Consulting & Advanced Services",
				description:
					"Technical guidance, API integration, serverless functions, testing strategies, and architecture planning.",
			},
		],
	},

	certifications: {
		title: "Professional Certifications.",
		items: [
			{
				title: "Meta Front-End Developer",
				issuer: "Meta",
				date: "2025",
				image: "...",
			},
			{
				title: "AWS Certified Cloud Practitioner",
				issuer: "Amazon Web Services",
				date: "2026",
				image: "...",
			},
		],
	},

	contact: {
		title: "Let's Get Started",
		formTitle: "Book a Session",
		description: "Ready to improve your fitness? Let's discuss your goals.",
		submitLabel: "Book Session",
	},
};
