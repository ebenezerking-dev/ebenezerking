// src/components/ui/HeroVideo.tsx

// ================== IMPORTS
import { useState } from "react";
import { images, videos } from "../../data/media";

// ================== PROPS
type HeroVideoProps = {
	className?: string;
	children?: React.ReactNode;
};

// ================== HOME PAGE VIDEO COMPONENT
export default function HeroVideo({
	className = "",
	children,
}: HeroVideoProps) {
	const [videoReady, setVideoReady] = useState(false);

	return (
		<div className={`relative overflow-hidden ${className}`}>
			{/* ================= POSTER IMAGE */}
			<img
				src={images.homePage.mediumHeroPoster}
				alt="Hero Poster"
				aria-hidden="true"
				className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
					videoReady ? "opacity-0" : "opacity-100"
				}`}
			/>

			{/* ================= VIDEO */}
			<video
				autoPlay
				muted
				loop
				playsInline
				preload="metadata"
				poster={images.homePage.mediumHeroPoster}
				onCanPlay={() => setVideoReady(true)}
				className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
					videoReady ? "opacity-100" : "opacity-0"
				}`}
			>
				<source src={videos.homePage.heroVideo} type="video/mp4" />
			</video>

			{/* ================= OVERLAY */}
			<div className="absolute inset-0 bg-black/20" />

			{/* ================= CONTENT */}
			<div className="absolute inset-0 z-10">{children}</div>
		</div>
	);
}
