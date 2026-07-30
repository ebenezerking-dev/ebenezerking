// src/components/reusables/modals/MediaGalleryModal.tsx

// ================== IMPORTS
import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useMemo, useState } from "react";
import { FaCaretLeft, FaCaretRight, FaTimes } from "react-icons/fa";
import type { HeroMedia, Service } from "../../../types/career";
import type { Theme } from "../../../types/career";

// ================== PROPS
interface ServicePreviewModalProps {
	service: Service | null;
	onClose: () => void;
	theme: Theme;
}

// ================== MODAL
export default function ServicePreviewModal({
	service,
	onClose,
	theme,
}: ServicePreviewModalProps) {
	// ================== MEDIA
	const media = useMemo<HeroMedia[]>(
		() => service?.preview?.media ?? [],
		[service],
	);

	// ================== STATE
	const [currentIndex, setCurrentIndex] = useState(0);
	const [isCloseHovered, setIsCloseHovered] = useState(false);
	const [isPrevHovered, setIsPrevHovered] = useState(false);
	const [isNextHovered, setIsNextHovered] = useState(false);

	// ================== PREVIOUS
	const previous = useCallback(() => {
		setCurrentIndex((prev) => (prev === 0 ? media.length - 1 : prev - 1));
	}, [media.length]);

	// ================== NEXT
	const next = useCallback(() => {
		setCurrentIndex((prev) => (prev === media.length - 1 ? 0 : prev + 1));
	}, [media.length]);

	// ================== LOCK PAGE SCROLL
	useEffect(() => {
		if (!service) return;

		const originalBodyOverflow = document.body.style.overflow;
		const originalHtmlOverflow = document.documentElement.style.overflow;

		document.body.style.overflow = "hidden";
		document.documentElement.style.overflow = "hidden";

		return () => {
			document.body.style.overflow = originalBodyOverflow;
			document.documentElement.style.overflow = originalHtmlOverflow;
		};
	}, [service]);

	// ================== KEYBOARD CONTROLS
	useEffect(() => {
		if (!service) return;

		const handleKeyDown = (event: KeyboardEvent) => {
			switch (event.key) {
				case "Escape":
					onClose();
					break;

				case "ArrowLeft":
					previous();
					break;

				case "ArrowRight":
					next();
					break;
			}
		};

		window.addEventListener("keydown", handleKeyDown);

		return () => {
			window.removeEventListener("keydown", handleKeyDown);
		};
	}, [service, previous, next, onClose]);

	if (!service || media.length === 0) return null;

	const currentMedia = media[currentIndex];

	return (
		<AnimatePresence>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				onClick={onClose}
				style={{
					background: `linear-gradient(
            		${theme.gradientAngle},
            		${theme.gradientFrom},
            		${theme.gradientVia},
            		${theme.gradientTo}
        		)`,
				}}
				className="fixed inset-0 z-9999 flex items-center sm:items-end justify-center bg-gray-500 backdrop-blur-md"
			>
				<motion.div
					initial={{ scale: 0.95, opacity: 0 }}
					animate={{ scale: 1, opacity: 1 }}
					exit={{ scale: 0.95, opacity: 0 }}
					transition={{ duration: 0.25 }}
					onClick={(e) => e.stopPropagation()}
					className="relative w-full max-w-6xl rounded-2xl p-4"
				>
					{/* ======================== TITLE */}
					<h2 className="mb-1 text-center text-xl font-bold text-white">
						{service.preview?.title ?? service.title}
					</h2>

					{/* ======================== CLOSE BUTTON */}
					<button
						type="button"
						aria-label="Close preview"
						onClick={onClose}
						onMouseEnter={() => setIsCloseHovered(true)}
						onMouseLeave={() => setIsCloseHovered(false)}
						style={{
							background: theme.gradientTo,
						}}
						className="absolute right-5 top-4 rounded-2xl transition-transform duration-300 cursor-pointer"
					>
						<FaTimes
							size={35}
							color={isCloseHovered ? theme.primary : theme.surface}
						/>
					</button>

					{/* ======================== MEDIA */}
					<div className="flex items-center gap-1">
						{/* ======================== PREVIOUS */}
						{media.length > 1 && (
							<button
								type="button"
								onClick={previous}
								onMouseEnter={() => setIsPrevHovered(true)}
								onMouseLeave={() => setIsPrevHovered(false)}
								className="cursor-pointer transition-transform duration-300 hover:scale-110"
							>
								<FaCaretLeft
									size={40}
									color={isPrevHovered ? theme.primary : theme.surface}
								/>
							</button>
						)}

						{/* ======================== VIDEO */}
						<div className="flex-1">
							<AnimatePresence mode="wait">
								<motion.div
									key={currentMedia.src}
									initial={{ opacity: 0, x: 50 }}
									animate={{ opacity: 1, x: 0 }}
									exit={{ opacity: 0, x: -50 }}
									transition={{ duration: 0.3 }}
								>
									{currentMedia.type === "video" ? (
										<video
											key={currentMedia.src}
											controls
											autoPlay
											playsInline
											poster={currentMedia.poster}
											className="w-full rounded-xl"
										>
											<source src={currentMedia.src} type="video/mp4" />
										</video>
									) : (
										<img
											src={currentMedia.src}
											alt={service.title}
											className="w-full rounded-xl"
										/>
									)}
								</motion.div>
							</AnimatePresence>

							{/* ======================== LENGTH SPLIT */}
							{media.length > 1 && (
								<p className="mt-1 text-center text-neutral-400">
									{currentIndex + 1} / {media.length}
								</p>
							)}
						</div>

						{/* ======================== NEXT VIDEO */}
						{media.length > 1 && (
							<button
								type="button"
								aria-label="Next media"
								onClick={next}
								onMouseEnter={() => setIsNextHovered(true)}
								onMouseLeave={() => setIsNextHovered(false)}
								className="cursor-pointer transition-transform duration-300 hover:scale-110"
							>
								<FaCaretRight
									size={40}
									color={isNextHovered ? theme.primary : theme.surface}
								/>
							</button>
						)}
					</div>

					{/* ======================== THUMBNAIL */}
					{media.length > 1 && (
						<div className="mt-1 flex flex-wrap justify-center gap-3">
							{media.map((item, index) => (
								<button
									key={item.src}
									type="button"
									onClick={() => setCurrentIndex(index)}
									className={`h-14 w-24 overflow-hidden rounded-lg border-2 transition ${
										index === currentIndex
											? "border-green-400"
											: "border-transparent"
									}`}
								>
									<div className="relative h-full w-full bg-neutral-800">
										<img
											src={
												item.type === "video"
													? (item.poster ?? item.src)
													: item.src
											}
											alt="Video poster"
											className="h-full w-full object-cover"
											loading="eager"
										/>
									</div>
								</button>
							))}
						</div>
					)}
				</motion.div>
			</motion.div>
		</AnimatePresence>
	);
}
