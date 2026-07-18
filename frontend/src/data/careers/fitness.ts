// src/data/careers/fitness.ts
// This data file that contains the career data for the fitness career

// ================== IMPORTS
import type { CareerData } from "../../types/career";
import { images, videos } from "../../data/media";

// ================== CAREER DATA EXPORTS
export const fitnessData: CareerData = {
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
		{
			label: "Resume",
			href: "https://docs.google.com/document/d/1rJPpVZp4a4GW5Fh6FERhmrxz6-1rMd68lZzIRnNYCDA/edit?tab=t.0",
			target: "_blank",
		},
	],

	theme: {
		primary: "#00FF91",
		secondary: "#111111",
		accent: "#ffffff",
		background: "#020617",
		surface: "#000000",
		gradientAngle: "45deg",
		gradientFrom: "#7a19ff",
		gradientVia: "#470066",
		gradientTo: "#f34ef3",
		divider: "#000AFD",
		underline: "#f34ef3",
	},

	hero: {
		title: "Fitness Instructor",
		subtitle:
			"Helping individuals build strength, improve health, and achieve lasting lifestyle transformation",
		heroMedia: [
			{
				type: "video",
				src: videos.careers.fitness.heroVideo3,
			},
			{
				type: "image",
				src: images.careers.fitness.heroPoster,
			},
			{
				type: "video",
				src: videos.careers.fitness.heroVideo1,
			},
		],
		button: {
			label: "Download Resume",
			href: "/resume/Fitness.pdf",
			download: true,
		},
	},

	about: {
		title: "I am Ebenezer.",
		intro: "I coach. I motivate. I transform.",
		paragraphs: [
			"Fitness is more than exercise to me—it's about helping people build confidence, improve their health, and develop habits that create lasting change. I enjoy creating a supportive environment where every client feels encouraged to challenge themselves and celebrate their progress.",

			"With experience delivering one-to-one personal training, circuit training, and group fitness sessions in both the United Kingdom and Nigeria, I've worked with people of different ages, abilities, and fitness goals. Every programme I design is tailored to the individual's needs, ensuring sessions are safe, effective, and enjoyable.",

			"I believe great coaching goes beyond counting reps. By combining fitness assessments, structured training plans, proper exercise technique, and continuous motivation, I help clients stay consistent and achieve measurable results while reducing the risk of injury.",

			"Whether I'm coaching a beginner taking their first steps into fitness or supporting someone pursuing higher performance, my goal remains the same: to inspire confidence, build healthy lifestyles, and make every training session a positive and rewarding experience.",
		],
	},

	skills: {
		title: "My Fitness Expertise",
		items: [
			{ name: "Personal Training" },
			{ name: "Group Fitness" },
			{ name: "Circuit Training" },
			{ name: "Spinning Class" },
			{ name: "Functional Training" },
			{ name: "Strength & Conditioning" },
			{ name: "Exercise Programming" },
			{ name: "Fitness Assessments" },
			{ name: "Exercise Technique" },
			{ name: "Injury Prevention" },
			{ name: "Nutrition Guidance" },
			{ name: "Client Motivation" },
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
					"Delivered personalised one-to-one fitness coaching tailored to individual goals and fitness levels.",
					"Led circuit training and group fitness classes for members with varying experience levels.",
					"Conducted fitness assessments and designed effective exercise programmes for clients.",
					"Coached proper exercise techniques while promoting safe training practices and injury prevention.",
					"Built strong relationships with members through motivation, exceptional customer service, and ongoing support.",
				],
			},
			{
				company: "Easy Gym",
				role: "Personal Trainer",
				duration: "2017 - 2019",
				description: [
					"Designed customised training programmes based on clients' goals, abilities, and lifestyles.",
					"Delivered coaching in strength training, cardiovascular fitness, flexibility, and functional movement.",
					"Provided practical nutrition and healthy lifestyle guidance to complement training plans.",
					"Monitored client progress and adapted programmes to maximise results and maintain motivation.",
					"Promoted personal training services while building lasting client relationships through professional coaching.",
				],
			},
		],
	},

	services: {
		title: "Services I Can Offer You",
		items: [
			{
				title: "Personal Training",
				description:
					"One-to-one coaching tailored to your fitness level, goals, and lifestyle. Every programme is designed to help you build strength, improve fitness, and achieve sustainable results.",
			},
			{
				title: "Group Fitness Classes",
				description:
					"High-energy group workouts that keep participants motivated, engaged, and challenged in a safe, supportive environment suitable for all fitness levels.",
			},
			{
				title: "Circuit Training",
				description:
					"Structured circuit sessions focused on improving strength, endurance, cardiovascular fitness, and overall body conditioning through dynamic functional exercises.",
			},
			{
				title: "Spinning Classes",
				description:
					"Engaging indoor cycling sessions designed to improve cardiovascular fitness, build lower-body strength, increase endurance, and help participants achieve their fitness goals in an effective and enjoyable workout experience.",
			},
			{
				title: "Fitness Assessments & Programme Design",
				description:
					"Comprehensive fitness assessments followed by personalised training plans that align with your goals, abilities, and long-term health objectives.",
			},
			{
				title: "Member Support & Motivation",
				description:
					"Continuous encouragement, accountability, and professional coaching to help clients stay motivated, build confidence, and remain committed throughout their fitness journey.",
			},
		],
	},

	certifications: {
		title: "Professional Certifications.",
		items: [
			{
				title: "Personal Trainer",
				issuer: "ActiveIQ",
				issuedDate: "25th August 2017",
				image: images.careers.fitness.certificates.PersonalTrainer,
			},
			{
				title: "Fitness Instructor",
				issuer: "YMCA awards",
				issuedDate: "24th October 2016",
				image: images.careers.fitness.certificates.FitnessInstructor,
			},
			{
				title: "Circuit Training Instructor",
				issuer: "YMCA awards",
				issuedDate: "19th October 2016",
				image: images.careers.fitness.certificates.CircuitTraining,
			},
			{
				title: "Studio Cycling Instructor",
				issuer: "ActiveIQ",
				issuedDate: "22nd June 2017",
				image: images.careers.fitness.certificates.StudioCycling,
			},
			{
				title: "Lifestyle Management",
				issuer: "YMCA awards",
				issuedDate: "20th June 2016",
				image: images.careers.fitness.certificates.LifeStyleManagement,
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
