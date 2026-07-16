// src/components/reusables/others/RippleButton.tsx

// ===================================== IMPORTS
import type { ReactNode } from "react";

// ===================================== PROPS
interface RippleButtonProps {
	href?: string;
	children: ReactNode;
	onClick?: () => void;
	size?: "sm" | "md" | "lg";
	target?: "_self" | "_blank";
	download?: boolean;
	className?: string;
}

// ===================================== SHARED CONTENT
const ButtonContent = ({ children }: { children: ReactNode }) => (
	<>
		{/* Expanding circle effect */}
		<span className="absolute w-0 h-0 rounded-full bg-[#00ff91] transition-all duration-500 ease-out group-hover:h-56 group-hover:w-56" />

		{/* Left decorative wave */}
		<span className="absolute bottom-0 left-0 -ml-2 h-full">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				className="h-full w-auto object-stretch opacity-100"
				viewBox="0 0 487 487"
			>
				<path
					fill="#FFF"
					fillOpacity="0.1"
					fillRule="nonzero"
					d="M0 .3c67 2.1 134.1 4.3 186.3 37 52.2 32.7 89.6 95.8 112.8 150.6 23.2 54.8 32.3 101.4 61.2 149.9 28.9 48.4 77.7 98.8 126.4 149.2H0V.3z"
				/>
			</svg>
		</span>

		{/* Right decorative wave */}
		<span className="absolute top-0 right-0 -mr-3 h-full w-12">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				className="h-full w-full object-cover"
				viewBox="0 0 487 487"
			>
				<path
					fill="#FFF"
					fillOpacity="0.1"
					fillRule="nonzero"
					d="M487 486.7c-66.1-3.6-132.3-7.3-186.3-37s-95.9-85.3-126.2-137.2c-30.4-51.8-49.3-99.9-76.5-151.4C70.9 109.6 35.6 54.8.3 0H487v486.7z"
				/>
			</svg>
		</span>

		{/* Gradient overlay */}
		<span className="absolute inset-0 -mt-1 h-full w-full rounded-md bg-linear-to-b from-transparent via-transparent to-gray-200 opacity-30" />

		{/* Button text */}
		<span className="relative z-10 font-semibold capitalize">{children}</span>
	</>
);

// ===================================== COMPONENT
export default function RippleButton({
	href,
	children,
	onClick,
	size = "md",
	target,
	download = false,
	className = "",
}: RippleButtonProps) {
	const sizeClasses = {
		sm: "px-3 py-1 text-xs",
		md: "px-5 py-1.5 text-sm",
		lg: "px-7 py-2 text-base",
	};

	const classes = `relative inline-flex items-center justify-center ${sizeClasses[size]} overflow-hidden rounded-md bg-[#000000] font-bold tracking-tighter text-white border-r-6 border-[#00ff91] group transition-all duration-300
	hover:scale-105 hover:border-orange-500 hover:text-black active:scale-95 cursor-pointer ${className}`;

	if (href) {
		return (
			<a
				href={href}
				onClick={onClick}
				download={download}
				target={target}
				rel={target === "_blank" ? "noopener noreferrer" : undefined}
				className={classes}
			>
				<ButtonContent>{children}</ButtonContent>
			</a>
		);
	}

	return (
		<button type="button" onClick={onClick} className={classes}>
			<ButtonContent>{children}</ButtonContent>
		</button>
	);
}
