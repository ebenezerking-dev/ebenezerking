// reusables/animations/sharedSc.ts

// ================== IMPORTS
import {
	buildHomepageDeveloperImageVariants,
	buildFadeYVariant,
	buildFadeXVariant,
	buildFadeInVariant,
	buildUnderlineVariant,
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

// ===================================== HOMEPAGE HERO IMAGE/VIDEO
export const developerCareerImage = buildFadeYVariant({
	y: 100,
	duration: 0.8,
});

// ===================================== HOMEPAGE & HERO TITLE
export const homepageHeroTitle = buildFadeYVariant({
	y: -40,
	delay: 0.3,
});

// ===================================== HOMEPAGE DEVELOPER IMAGE
export const developerImage = buildHomepageDeveloperImageVariants;

// ===================================== HEADER
export const header = buildFadeYVariant({ y: 20, duration: 0.15 });

// ===================================== HEADER UNDERLINE
export const headerUnderline = buildUnderlineVariant();

// ===================================== HERO SUBTITLE
export const heroSubTitle = buildFadeInVariant({
	delay: 1.2,
});

// ===================================== HERO BUTTON
export const heroButton = buildFadeInVariant({
	delay: 1.4,
});

// ===================================== HERO DATE
export const dateHero = buildFadeXVariant({
	x: 100,
	delay: 1.6,
	duration: 0.6,
});

// ===================================== FITNESS HERO VIDEOS
export const video1 = buildFadeXVariant({
	x: -500,
	delay: 0.6,
	duration: 0.9,
});
export const video2 = buildFadeYVariant({
	y: 300,
	delay: 0.3,
	duration: 0.9,
});
export const video3 = buildFadeXVariant({
	x: 500,
	delay: 0.6,
	duration: 0.9,
});

// ===================================== DIVIDER
export const bottomDivider = buildScaleXVariant();

// ===================================== BODY HEADER UNDERLINE
export const bodyUnderline = buildUnderlineVariant({
	width: "80%",
});

// ===================================== PARAGRAPH UP
export const paragraphUp = buildFadeYVariant({
	y: 50,
	duration: 0.6,
});
