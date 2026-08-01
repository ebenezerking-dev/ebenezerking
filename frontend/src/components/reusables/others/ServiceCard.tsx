// src/components/reusables/others/ServiceCard.tsx

// ================== IMPORTS
import { useState } from "react";
import MediaBackground from "../../ui/MediaBackground";
import RippleButton from "./RippleButton";
import SectionSubtitle from "./SectionSubtitle";
import type { Service, Theme } from "../../../types/career";
import useBreakpoint from "../../../hooks/useBreakpoint";

// ================== PROPS
interface ServiceCardProps {
	service: Service;
	theme: Theme;
	onPreview?: (service: Service) => void;
}

// ================== SERVICE CARD
export default function ServiceCard({
	service,
	theme,
	onPreview,
}: ServiceCardProps) {
	const [isHovered, setIsHovered] = useState(false);
	const breakpoint = useBreakpoint();
	const background = service.appearance?.background;
	const backgroundScale = background?.scale?.[breakpoint] ?? 1;
	const hasPreview = Boolean(service.preview);
	const openPreview = () => {
		if (hasPreview) {
			onPreview?.(service);
		}
	};
	const wrapperProps = {
		onMouseEnter: () => setIsHovered(true),
		onMouseLeave: () => setIsHovered(false),
		className:
			"group overflow-hidden rounded-2xl border-2 transition-all duration-300",
		style: {
			borderColor: isHovered ? theme.borderHover : theme.underline,
		},
	};

	const cardContent = (
		<div className="relative z-10 flex h-full min-h-110 flex-col justify-between p-6 text-center">
			<div>
				<h4 className="mb-8">
					<SectionSubtitle title={service.title} theme={theme} />
				</h4>

				<p className="rounded-2xl bg-black/50 p-2 font-tinos text-md italic backdrop-blur-sm">
					{service.description}
				</p>
			</div>

			{hasPreview && (
				<div className="mt-4 flex justify-center">
					<RippleButton onClick={openPreview}>
						{service.preview?.buttonLabel ?? "Watch Demo"}
					</RippleButton>
				</div>
			)}
		</div>
	);

	if (background) {
		return (
			<div {...wrapperProps}>
				<MediaBackground
					type={background.type}
					src={background.src}
					poster={background.poster}
					scale={backgroundScale}
					className="min-h-110"
					mediaClassName="transition-transform duration-700 group-hover:scale-105"
					overlayClassName={
						service.appearance?.overlayClassName ?? "bg-black/30"
					}
				>
					{cardContent}
				</MediaBackground>
			</div>
		);
	}

	return (
		<div
			{...wrapperProps}
			className={`${wrapperProps.className} min-h-60 bg-black/20 hover:bg-black`}
		>
			{cardContent}
		</div>
	);
}
