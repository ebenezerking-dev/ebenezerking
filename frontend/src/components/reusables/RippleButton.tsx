// =====================================
// src/Components/Reusables/RippleButton.tsx
// =====================================
import type { ReactNode } from "react";

// =====================================
interface RippleButtonProps {
	href: string;
	children: ReactNode;
	onClick?: () => void;
	size?: "sm" | "md" | "lg";
	newTab?: boolean;
}

// =====================================
export default function RippleButton({
	href,
	children,
	onClick,
	size = "md",
	newTab = false,
}: RippleButtonProps) {
	const sizeClasses = {
		sm: "px-3 py-1 text-xs",
		md: "px-5 py-1.5 text-sm",
		lg: "px-7 py-2 text-base",
	};

	return (
		<a
			href={href}
			onClick={onClick}
			target={newTab ? "_blank" : undefined}
			rel={newTab ? "noopener noreferrer" : undefined}
			className={`relative inline-flex items-center justify-center ${sizeClasses[size]} overflow-hidden tracking-tighter text-white font-bold bg-[#000000] border-r-6 border-[#00ff91] hover:text-black hover:border-orange-500 rounded-md group transition-all duration-300 hover:scale-105 active:scale-95`}
		>
			{/* Expanding circle effect */}
			<span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-[#00ff91] rounded-full group-hover:w-56 group-hover:h-56" />

			{/* Left decorative wave */}
			<span className="absolute bottom-0 left-0 h-full -ml-2">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="w-auto h-full opacity-100 object-stretch"
					viewBox="0 0 487 487"
				>
					<path
						fillOpacity="0.1"
						fillRule="nonzero"
						fill="#FFF"
						d="M0 .3c67 2.1 134.1 4.3 186.3 37 52.2 32.7 89.6 95.8 112.8 150.6 23.2 54.8 32.3 101.4 61.2 149.9 28.9 48.4 77.7 98.8 126.4 149.2H0V.3z"
					/>
				</svg>
			</span>

			{/* Right decorative wave */}
			<span className="absolute top-0 right-0 w-12 h-full -mr-3">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="object-cover w-full h-full"
					viewBox="0 0 487 487"
				>
					<path
						fillOpacity="0.1"
						fillRule="nonzero"
						fill="#FFF"
						d="M487 486.7c-66.1-3.6-132.3-7.3-186.3-37s-95.9-85.3-126.2-137.2c-30.4-51.8-49.3-99.9-76.5-151.4C70.9 109.6 35.6 54.8.3 0H487v486.7z"
					/>
				</svg>
			</span>

			{/* Gradient overlay */}
			<span className="absolute inset-0 w-full h-full -mt-1 rounded-md opacity-30 bg-linear-to-b from-transparent via-transparent to-gray-200" />

			{/* Button text */}
			<span className="relative font-semibold capitalize z-10">{children}</span>
		</a>
	);
}
