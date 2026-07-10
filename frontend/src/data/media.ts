// src/data/media.ts
// General media assets (Cloudinary)
// Image uploads should use: f_auto,q_auto,w_1280/

// ================== IMAGE ASSETS
export const images = {
	homePage: {
		mobileHeroPoster:
			"https://res.cloudinary.com/zqrsa9rd/image/upload/f_auto,q_auto,w_1280/v1783603380/kingAnimePp_qgaimc.png",
		mediumHeroPoster:
			"https://res.cloudinary.com/zqrsa9rd/image/upload/f_auto,q_auto,w_1280/v1783428821/homePageV_poster.jpg",
	},

	careers: {
		developer: {
			heroPoster:
				"https://res.cloudinary.com/zqrsa9rd/image/upload/f_auto,q_auto,w_1280/v1783433951/developerHeroLg.jpg",

			projects: {
				velly: {
					mobile:
						"https://res.cloudinary.com/zqrsa9rd/image/upload/f_auto,q_auto,w_1280/v1783603435/iPhoneI_xvhiij.webp",
					tablet:
						"https://res.cloudinary.com/zqrsa9rd/image/upload/f_auto,q_auto,w_1280/v1783603437/iPadI_xy3ocy.webp",
					desktop:
						"https://res.cloudinary.com/zqrsa9rd/image/upload/f_auto,q_auto,w_1280/v1783603436/MacbookI_jm95kg.webp",
				},

				portfolio: {
					mobile:
						"https://res.cloudinary.com/zqrsa9rd/image/upload/f_auto,q_auto,w_1280/v1783638471/iPhone-13-PRO-MAX-portfolio_kvn6gn.webp",
					tablet:
						"https://res.cloudinary.com/zqrsa9rd/image/upload/f_auto,q_auto,w_1280/v1783603437/iPadP_nwy6pt.webp",
					desktop:
						"https://res.cloudinary.com/zqrsa9rd/image/upload/f_auto,q_auto,w_1280/v1783603436/MacbookP_q2rjgz.webp",
				},

				taxlator: {
					mobile:
						"https://res.cloudinary.com/zqrsa9rd/image/upload/f_auto,q_auto,w_1280/v1783638470/iPhone-13-PRO-MAX-taxlator.app_n8iuxs.webp",
					tablet:
						"https://res.cloudinary.com/zqrsa9rd/image/upload/f_auto,q_auto,w_1280/v1783638470/iPad-Air-4-taxlator.app_eslbm6.webp",
					desktop:
						"https://res.cloudinary.com/zqrsa9rd/image/upload/f_auto,q_auto,w_1280/v1783603434/MacbookT_idyqrw.webp",
				},
			},

			certificates: {
				metaFrontEnd: "...",
				awsCloudPractitioner: "...",
			},
		},

		designer: {
			heroPoster: "...",
		},
	},

	ui: {
		logo: "...",
		favicon: "...",

		backgrounds: {
			footer: "...",
		},
	},
};

// ================== VIDEO ASSETS
export const videos = {
	homePage: {
		heroVideo:
			"https://res.cloudinary.com/zqrsa9rd/video/upload/ac_none,f_auto,q_auto:good,w_1280/v1783392844/homePageV.mp4",
	},
};
