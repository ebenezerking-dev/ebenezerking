// src/types/career.ts
// this file contains the interface types for the career data used in the project

// ================== IMPORTS
import type { IconType } from "react-icons";

// ================== CAREER INTERFACE
export interface CareerData {
	slug: string;
	title: string;
	subtitle?: string;
	navigation: NavigationItem[];
	theme: Theme;
	hero: Hero;
	about: About;
	skills: SkillsData;
	experience: ExperienceData;
	projects?: ProjectData;
	services?: ServiceData;
	certifications: CertificationData;
	contact: ContactData;
}

export interface NavigationItem {
	label: string;
	href: string;
	target?: "_self" | "_blank";
}

export interface Theme {
	primary: string;
	secondary: string;
	accent: string;
	background: string;
	surface: string;
	gradientFrom: string;
	gradientVia: string;
	gradientTo: string;
	divider: string;
	underline: string;
}

export interface Hero {
	title: string;
	subtitle: string;
	heroImage: string;
	button: HeroButton;
}
export interface HeroButton {
	label: string;
	href: string;
	download?: boolean;
}

export interface About {
	title: string;
	intro?: string;
	paragraphs: string[];
}

export interface SkillsData {
	title: string;
	items: Skill[];
}
export interface Skill {
	name: string;
	icon?: IconType;
}

export interface ExperienceData {
	title: string;
	items: Experience[];
}
export interface Experience {
	company: string;
	role: string;
	duration: string;
	description: string[];
}

export interface ProjectData {
	title: string;
	items: Project[];
}
export interface Project {
	title: string;
	description: string;
	images: {
		mobile?: string;
		tablet?: string;
		desktop?: string;
	};
	technologies: string[];
	github?: string;
	live?: string;
}

export interface ServiceData {
	title: string;
	items: Service[];
}
export interface Service {
	title: string;
	description: string;
	icon?: string;
}

export interface CertificationData {
	title: string;
	items: Certification[];
}
export interface Certification {
	title: string;
	issuer: string;
	issuedDate: string;
	credentialId?: string;
	image: string;
}

export interface ContactData {
	title: string;
	formTitle: string;
	description?: string;
	submitLabel?: string;
}
