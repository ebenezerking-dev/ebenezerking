// =====================================
// TOAST UI
// src/components/ui/Toast.tsx
// =====================================
import type { ToastType } from "../../hooks/useToast";

export const Toast = ({
	message,
	type,
}: {
	message: string;
	type: ToastType;
}) => {
	const styles = {
		success: "bg-green-500",
		error: "bg-red-500",
		info: "bg-blue-500",
	};

	return (
		<div
			className={`fixed top-[7rem] right-[35rem] z-50 px-4 py-3 rounded-lg text-white shadow-lg animate-fade-in ${styles[type]}`}
		>
			{message}
		</div>
	);
};
