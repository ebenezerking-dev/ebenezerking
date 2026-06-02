// =====================================
// TOAST SYSTEM
// src/hooks/useToast.ts
// =====================================
import { useState, useCallback } from "react";

// =====================================
export type ToastType = "success" | "error" | "info";

// =====================================
export const useToast = () => {
	const [toast, setToast] = useState<{
		message: string;
		type: ToastType;
	} | null>(null);

	const showToast = useCallback((message: string, type: ToastType = "info") => {
		setToast({ message, type });

		setTimeout(() => {
			setToast(null);
		}, 3000);
	}, []);

	return { toast, showToast };
};
