// src/animations/developerSc.ts

// ================== IMPORTS
// import type { Variants } from "framer-motion";
import {
	buildHomeSpanOneVariants,
	buildHomepageDeveloperImageVariants,
	buildContainerVariant,
	buildFadeYVariant,
	buildFadeXVariant,
	buildFadeInVariant,
	buildUnderlineVariant,
	buildScaleVariant,
	buildIndexedFadeYVariant,
	buildPopToastVariants,
	buildCardHover,
	buildScaleXVariant,
} from "./factory";

// ================== VIEWPORT EXPORTS
export const viewportOnce = {
	once: true,
	amount: 0.2,
};
export const viewportRepeat = {
	once: false,
	amount: 0.2,
};

// =====================================
// ===================================== HOMEPAGE & HERO TITLE
export const homepageHeroTitle = buildFadeYVariant({
	y: -300,
	delay: 0.3,
});
export const developerCareerImage = buildFadeYVariant({
	y: 100,
	duration: 0.8,
});

// =====================================
// ===================================== HERO SUBTITLE
export const heroSubTitle = buildFadeInVariant();

// ===================================== HERO BUTTON
export const heroButton = buildFadeInVariant({
	delay: 1.0,
});

// ===================================== HOMEPAGE HERO VARIANTS
export const developerImage = buildHomepageDeveloperImageVariants;

// ===================================== HOME CAREER SPAN
export const homeCareerSpan = buildHomeSpanOneVariants;

// ===================================== HOME CAREER TITLE CONTAINER
export const developerCareer = buildFadeXVariant({
	x: -300,
	delay: 0.4,
});
export const fitnessCareer = buildFadeXVariant({
	x: -300,
	delay: 0.8,
});
export const customerServiceCareer = buildFadeXVariant({
	x: -300,
	delay: 1.2,
});

// ===================================== HERO DATE CONTAINER
export const dateHero = buildFadeXVariant({
	x: 100,
	delay: 1.5,
	duration: 0.6,
});

// =====================================
// ===================================== SECTION CONTAINER
export const developer = buildContainerVariant({
	animateSelf: true,
});

export const developerBody = buildContainerVariant({
	animateSelf: false,
	delayChildren: 0.2,
	staggerChildren: 0.8,
});

// ===================================== HEADER
export const header = buildFadeYVariant({ y: 15, duration: 0.15 });

// ===================================== HEADER UNDERLINE
export const headerUnderline = buildUnderlineVariant();

// ===================================== DIVIDER
export const bottomDivider = buildScaleXVariant();

// ===================================== ABOUT -
// ===================================== FADE Y
export const paragraphUp = buildFadeYVariant({
	y: 50,
	duration: 0.6,
});

// ===================================== FADE X
export const footerLeft = buildFadeXVariant({
	x: -100,
	delay: 0.4,
});
export const footerRight = buildFadeXVariant({
	x: 100,
	delay: 0.4,
});
export const footerCenter = buildFadeYVariant({
	y: 100,
	delay: 0.3,
});

// ===================================== CARD UP
export const cardUpScale = buildScaleVariant({ duration: 0.6 });
export const skillCard = buildFadeYVariant({
	y: 50,
	duration: 0.6,
	// delay: 0.3,
});
export const cardFadeX = buildFadeXVariant({ x: -50 });

// ===================================== CARD HOVER
export const cardHover = buildCardHover;

// ===================================== EXPERIENCE SECTION

// ===================================== SKILLS
export const skillsRowStagger = buildContainerVariant({
	animateSelf: false,
	staggerChildren: 0.6,
});
export const skillItem = buildIndexedFadeYVariant();

// ===================================== PROJECT BOARD
export const projectBoardContainer = buildFadeYVariant({
	y: 40,
});
// ===================================== PROJECT BOARD IMAGES
export const deskTopImage = buildScaleVariant();
export const smMdImage = buildScaleVariant({ delay: 3 });
// ===================================== PROJECT BOARD DETAILS
export const paragraphScale = buildScaleVariant({ delay: 2 });
export const techTag = buildScaleVariant({
	scale: 0.8,
	duration: 0.35,
	delay: 2,
});
// ===================================== PROJECT HR
export const projectHr = buildScaleXVariant(0, 0);

// ===================================== SERVICE CARD
export const serviceCardContainer = buildScaleVariant({});

// ===================================== CERTIFICATES
export const certificatesImage = buildScaleVariant({
	delay: 0.3,
});

// ===================================== FORM SECTION
export const formContainer = buildContainerVariant({
	animateSelf: false,
	delayChildren: 0.2,
	staggerChildren: 0.2,
});
export const formField = buildFadeXVariant({
	x: -30,
	duration: 0.4,
});

// ===================================== FORM SUBMIT BUTTON
export const formSubmitButton = buildScaleVariant({
	delay: 0.3,
});

// ===================================== FORM POP TOAST
export const contactToast = buildPopToastVariants();
