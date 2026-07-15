// src/animations/developerSc.ts

// ================== IMPORTS
// import type { Variants } from "framer-motion";
import {
	buildHomeSpanOneVariants,
	buildHomepageDeveloperImageVariants,
	buildContainerVariant,
	buildItemVisibleVariant,
	buildFadeYVariant,
	buildFadeXVariant,
	buildFadeOutVariant,
	buildHeaderVariant,
	buildUnderlineVariant,
	buildCardVariants,
	buildDividerVariant,
	buildRowStaggerVariant,
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
	y: -100,
	delay: 0.3,
});

export const developerCareerImage = buildFadeYVariant({
	y: 100,
	duration: 0.8,
});

// ===================================== HERO SUBTITLE
export const heroSubTitle = buildFadeOutVariant();

// ===================================== HERO BUTTON
export const heroButton = buildFadeOutVariant({
	delay: 1.0,
});

// ===================================== HOMEPAGE HERO VARIANTS
export const developerImage = buildHomepageDeveloperImageVariants;

// ===================================== HOME CAREER SPAN
export const homeCareerSpan = buildHomeSpanOneVariants;

// ===================================== HOME CAREER TITLE CONTAINER
export const developerCareer = buildFadeXVariant({
	x: -100,
	delay: 0.4,
});
export const fitnessCareer = buildFadeXVariant({
	x: -100,
	delay: 0.6,
});
export const customerServiceCareer = buildFadeXVariant({
	x: -100,
	delay: 0.8,
});

// ===================================== HERO DATE CONTAINER
export const dateHero = buildFadeXVariant({
	x: 100,
	delay: 0.6,
	duration: 0.6,
});

// =====================================
// ===================================== HEADER CONTAINER
// ===================================== Role: Main section container
export const developer = buildContainerVariant(true);

// ===================================== HEADER
export const header = buildHeaderVariant();

// ===================================== HEADER UNDERLINE
export const headerUnderline = buildUnderlineVariant();

// ===================================== BODY CONTAINER
// ===================================== Role: Body content container
export const developerBody = buildContainerVariant(true, 0.4, 0.25);

// ===================================== DIVIDER
export const bottomDivider = buildDividerVariant();

// ===================================== ABOUT -
// ===================================== FADE Y
export const fadeUpThree = buildFadeYVariant({
	y: 40,
	duration: 0.6,
	delay: 0.3,
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
export const cardVariants = buildCardVariants;

// ===================================== EXPERIENCE ITEMS CONTAINER
// ===================================== Role: Stagger each experience item one at a time
export const experienceItemsContainerVariant = buildContainerVariant(
	true, // animate self
	0.3, // delay children
	0.25, // stagger children - adjust this to control timing between items
);

// ===================================== EXPERIENCE ITEM
// ===================================== Role: Individual experience item fade up animation
export const experienceItemVariant = buildItemVisibleVariant(30, 0.6);

// ===================================== SKILLS (if needed elsewhere)
export const skillsRowStaggerVariant = buildRowStaggerVariant();
export const skillItemVisibleVariant = buildItemVisibleVariant();
