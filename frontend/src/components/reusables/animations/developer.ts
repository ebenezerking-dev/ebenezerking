// src/animations/developerSc.ts

// ================== IMPORTS
import {
	buildHomeSpanOneVariants,
	buildContainerVariant,
	buildFadeYVariant,
	buildFadeXVariant,
	buildScaleVariant,
	buildIndexedFadeYVariant,
	buildPopToastVariants,
	buildCardHover,
	buildScaleXVariant,
	buildLayoutTransition,
} from "./factory";

// =====================================

// =====================================

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

// ===================================== ABOUT -
// =====================================
export const aboutItem = buildIndexedFadeYVariant();

// ===================================== CARD UP
export const cardUpScale = buildScaleVariant({ duration: 0.6 });
export const skillCard = buildFadeYVariant({
	y: 50,
	duration: 0.6,
});
export const cardFadeX = buildFadeXVariant({ x: -50 });
// ===================================== CARD HOVER
export const cardHover = buildCardHover;
// =====================================
// =====================================

// ===================================== SKILLS SECTION
export const skillsRowStagger = buildContainerVariant({
	animateSelf: false,
	staggerChildren: 0.6,
});
// =====================================
export const skillItem = buildIndexedFadeYVariant();
// =====================================
export const seeMoreButton = buildFadeYVariant({
	y: 20,
	duration: 0.9,
	delay: 0.3,
});
export const buttonLayout = buildLayoutTransition();
// =====================================
// =====================================

// ===================================== EXPERIENCE SECTION
export const experimentBodyStagger = buildContainerVariant({
	animateSelf: false,
	staggerChildren: 0.6,
});
// =====================================
// =====================================

// ===================================== PROJECT SECTION
export const projectBoardContainer = buildFadeYVariant({
	y: 40,
});
// =====================================
export const deskTopImage = buildScaleVariant({
	y: 30,
	duration: 0.5,
});
export const smMdImage = buildScaleVariant({ scaleY: 0.5, delay: 0.4 });
// ===================================== BOARD DETAILS
export const techTag = buildIndexedFadeYVariant({ stepDelay: 0.09 });
// ===================================== HR
export const projectHr = buildScaleXVariant(0, 0);
// ===================================== BUTTON
export const projectActionButton = buildFadeYVariant({
	y: 20,
	duration: 0.9,
	delay: 0.3,
});
// =====================================
// =====================================

// ===================================== SERVICE CARD
export const serviceCardContainer = buildScaleVariant({});
export const serviceCardItem = buildIndexedFadeYVariant({ stepDelay: 0.09 });

// ===================================== CERTIFICATES SECTION
export const certificatesImage = buildScaleVariant({
	y: 30,
	duration: 0.5,
});
// =====================================
export const certificatesBodyStagger = buildContainerVariant({
	animateSelf: false,
	staggerChildren: 0.6,
});
// =====================================
// =====================================

// ===================================== FORM SECTION
export const formContainer = buildContainerVariant({
	animateSelf: false,
	delayChildren: 0.2,
	staggerChildren: 0.9,
});
export const formField = buildFadeXVariant({
	x: -100,
	duration: 0.6,
});
// ===================================== FORM SUBMIT BUTTON
export const formSubmitButton = buildScaleVariant({
	delay: 0.3,
});
// ===================================== POP TOAST
export const contactToast = buildPopToastVariants();
// =====================================
// =====================================

// ===================================== FOOTER FADE X
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
