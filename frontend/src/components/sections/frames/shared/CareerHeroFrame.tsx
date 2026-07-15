// src/components/sections/frames/shared/CareerHeroFrame.tsx

// ================== IMPORTS
import type { ReactNode } from "react";
import { NAVBAR_HEIGHT } from "../../../../constants/layout";
import type { Theme } from "../../../../types/career";

// ================== PROPS
type CareerHeroFrameProps = {
	children: ReactNode;
	theme: Theme;
	className?: string;
};

// ================== CAREER HERO FRAME
export default function CareerHeroFrame({
	children,
	theme,
}: CareerHeroFrameProps) {
	return (
		<section className="parent w-full">
			<div
				className="wrapper__theme relative overflow-hidden flex items-center justify-center w-full"
				style={{
					minHeight: `calc(100dvh - ${NAVBAR_HEIGHT}px)`,
					background: `linear-gradient(
						135deg,
						${theme.gradientFrom},
						${theme.gradientVia},
						${theme.gradientTo}
					)`,
				}}
			>
				{children}

				<div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-0.5 bg-linear-to-r from-transparent via-[#000AFD] to-transparent" />
			</div>
		</section>
	);
}
