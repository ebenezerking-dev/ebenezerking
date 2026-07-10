// src/data/careers/customerService.ts

// ================== CAREER DATA EXPORTS
export const customerServiceData = {
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
		title: "Customer Service & Administration",
		subtitle: "Providing exceptional support and administrative solutions.",
		description: "...",
		cta: "View Projects",
		heroImage: "/images/customerService/hero.png",
	},

	about: {
		heading: "About Me",
		title: "I am Ebenezer.",
		intro: "I listen. I solve. I support.",
		paragraphs: [
			"I turn my ideas into modern digital experiences by combining thoughtful design, clean code architecture, and problem-solving to build products people enjoy using.",
		],
	},

	skills: [
		{
			name: "React",
		},
		{
			name: "TypeScript",
		},
		{
			name: "Vue",
		},
		{
			name: "Tailwind CSS",
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
	],

	experience: [
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
	],

	contact: {
		email: "",
		linkedin: "",
		github: "",
	},
};
