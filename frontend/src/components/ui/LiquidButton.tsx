// =====================================
// LIQUID BUTTON (WATER FILL UX)
// src/components/ui/LiquidButton.tsx
// =====================================
import { useEffect, useState } from "react";

// =====================================
type Status = "idle" | "loading" | "success" | "error";

// =====================================
export const LiquidButton = ({
	status,
	children,
}: {
	status: Status;
	children: React.ReactNode;
}) => {
	const [progress, setProgress] = useState(0);

	useEffect(() => {
		let interval: ReturnType<typeof setInterval>;
		let timeout: ReturnType<typeof setTimeout>;

		const safeSetProgress = (value: number) => {
			queueMicrotask(() => setProgress(value));
		};

		if (status === "idle") {
			safeSetProgress(0);
		}

		if (status === "loading") {
			safeSetProgress(5);

			interval = setInterval(() => {
				setProgress((prev) => {
					if (prev >= 90) return 90;
					return prev + Math.random() * 8;
				});
			}, 180);
		}

		if (status === "success") {
			safeSetProgress(100);

			timeout = setTimeout(() => {
				setProgress(0);
			}, 500);
		}

		if (status === "error") {
			safeSetProgress(0);
		}

		return () => {
			if (interval) clearInterval(interval);
			if (timeout) clearTimeout(timeout);
		};
	}, [status]);

	return (
		<button
			type="submit"
			disabled={status === "loading"}
			className="relative block mx-auto overflow-hidden font-unna font-bold bg-[#000000] text-[#00ff91] border-b-6 border-orange-500 hover:border-[#00ff91] py-2 px-4 rounded-[0.5rem] transition-colors duration-300 cursor-pointer"
		>
			<span className="relative z-10">
				{status === "loading" ? "Sending..." : children}
			</span>

			<div
				className={`absolute bottom-0 left-0 w-full transition-all duration-300 opacity-80 ${
					status === "error" ? "bg-red-500" : "bg-green-500"
				}`}
				style={{ height: `${progress}%` }}
			/>
		</button>
	);
};
