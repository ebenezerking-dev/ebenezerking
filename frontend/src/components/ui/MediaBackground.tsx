// src/components/ui/MediaBackground.tsx

// ================== IMPORTS
import { useEffect, useRef, useState } from "react";

// ================== PROPS
type MediaBackgroundProps = {
	type: "image" | "video";
	src: string;
	poster?: string;
	alt?: string;
	className?: string;
	mediaClassName?: string;
	overlayClassName?: string;
	playbackRate?: number;
	scale?: number; 
	children?: React.ReactNode;
};

// ================== MEDIA BACKGROUND
export default function MediaBackground({
	type,
	src,
	poster,
	alt = "",
	className = "",
	mediaClassName = "",
	overlayClassName = "bg-black/20",
	playbackRate = 1,
	scale = 1,
	children,
}: MediaBackgroundProps) {
	const [mediaReady, setMediaReady] = useState(type === "image");
	const videoRef = useRef<HTMLVideoElement>(null);

	useEffect(() => {
		if (videoRef.current) {
			videoRef.current.playbackRate = playbackRate;
		}
	}, [playbackRate]);

	return (
		<div className={`relative overflow-hidden ${className}`}>
			{/* ================= POSTER */}
			{type === "video" && poster && (
				<img
					src={poster}
					alt=""
					aria-hidden="true"
					className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
						mediaReady ? "opacity-0" : "opacity-100"
					}`}
					style={{
						transform: `scale(${scale})`, // NEW: Apply scale to poster
					}}
				/>
			)}

			{/* ================= VIDEO */}
			{type === "video" ? (
				<video
					ref={videoRef}
					autoPlay
					muted
					loop
					playsInline
					preload="metadata"
					poster={poster}
					onCanPlay={() => setMediaReady(true)}
					className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${mediaClassName} ${mediaReady ? "opacity-100" : "opacity-0"}`}
					style={{
						transform: `scale(${scale})`,
					}}
				>
					<source src={src} type="video/mp4" />
				</video>
			) : (
				<div className="flex absolute inset-0 overflow-hidden">
					{/* ================= IMAGE */}
					<img
						src={src}
						alt={alt}
						className={`h-full w-full object-cover ${mediaClassName}`}
						style={{
							transform: `scale(${scale})`,
						}}
					/>
				</div>
			)}

			{/* ================= OVERLAY */}
			<div className={`absolute inset-0 ${overlayClassName}`} />

			{/* ================= CONTENT */}
			{children && <div className="absolute inset-0 z-10">{children}</div>}
		</div>
	);
}
