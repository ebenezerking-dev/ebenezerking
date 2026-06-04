// =====================================
// CONTACT SECTION
// src/Components/ContactSection.tsx
// =====================================
import { useState } from "react";
import SectionFrame from "../components/reusables/SectionFrame";
import { useToast } from "../hooks/useToast";
import { Toast } from "./ui/Toast";
import { LiquidButton } from "./ui/LiquidButton";

// =====================================
type FormState = {
	name: string;
	email: string;
	message: string;
};

type Status = "idle" | "loading" | "success" | "error";

const ContactSection = () => {
	const [formData, setFormData] = useState<FormState>({
		name: "",
		email: "",
		message: "",
	});

	const [status, setStatus] = useState<Status>("idle");

	const { toast, showToast } = useToast();

	// ================================== INPUT
	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		setFormData((prev) => ({
			...prev,
			[e.target.name]: e.target.value,
		}));
	};

	// ================================== VALIDATION
	const validate = () => {
		if (!formData.name.trim()) return "Name is required";
		if (!formData.email.includes("@")) return "Valid email required";
		if (!formData.message.trim()) return "Message is required";
		if (formData.message.trim().length < 10)
			return "Message must be at least 10 characters";
		return null;
	};

	// ================================== SUBMIT
	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		if (status === "loading") return;

		const error = validate();
		if (error) {
			showToast(error, "error");
			return;
		}

		setStatus("loading");

		try {
			const res = await fetch(`${import.meta.env.VITE_API_URL}/api/contact`, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(formData),
			});

			const data = await res.json();

			if (!res.ok) {
				setStatus("error");
				showToast(data?.message || "Something went wrong", "error");
				return;
			}

			setStatus("success");
			showToast("Message sent successfully 🚀", "success");

			setFormData({
				name: "",
				email: "",
				message: "",
			});

			setTimeout(() => setStatus("idle"), 1200);
		} catch {
			setStatus("error");
			showToast("Network error. Try again.", "error");

			setTimeout(() => setStatus("idle"), 1200);
		}
	};

	return (
		<SectionFrame className="contactSection relative h-auto w-full flex flex-col bg-gradient-to-b from-[#00485d] via-[#8ad6ed] to-[#00485d] overflow-hidden">
			<div className="serviceSection__wrapper w-full md:w-[90%] lg:w-[70%] mx-auto">
				{/* TOAST */}
				{toast && <Toast message={toast.message} type={toast.type} />}
				{/* HEADER */}
				<div className="wrapper__header uppercase font-unna font-bold text-[1rem] text-center mb-[16rem]">
					<h3 className="header relative inline-block">
						Let's connect.
						<span className="absolute left-1/2 -translate-x-1/2 bottom-[-0.2rem] h-[0.2rem] w-[40%] bg-red-500 rounded-full"></span>
					</h3>
				</div>

				{/* ========================= CONTACT FORM ======================== */}
				<div className="flex flex-1 flex-col justify-center items-center pb-[3rem]">
					<div className="form__wrapper w-full py-[1rem] mx-auto">
						{/* =========================== NAME */}
						<form
							onSubmit={handleSubmit}
							className="flex flex-col gap-4 text-[#22050c]"
						>
							<input
								type="text"
								name="name"
								placeholder="Your Name"
								className="w-full px-4 py-2 border-b border-orange-500/20 rounded-[0.5rem] bg-transparent text-[#22050c]"
								value={formData.name}
								onChange={handleChange}
								required
							/>

							<input
								type="email"
								name="email"
								placeholder="Your Email"
								className="w-full px-4 py-2 border-b border-orange-500/30 rounded-[0.5rem] bg-transparent text-[#22050c]"
								value={formData.email}
								onChange={handleChange}
								required
							/>
							<textarea
								name="message"
								rows={2}
								placeholder="Your Message"
								className="w-full px-4 py-2 border-b border-orange-500/20 rounded-[0.5rem] bg-transparent text-[#22050c]"
								value={formData.message}
								onChange={handleChange}
								required
							/>

							<LiquidButton status={status}>Send Message</LiquidButton>
						</form>
					</div>
				</div>
			</div>
			{/* ===================== GLOWING BOTTOM DIVIDER ===================== */}
			<div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[2px] bg-gradient-to-r from-transparent via-orange-500 to-transparent shadow-[0_0_12px_rgba(255,165,0,0.7)]"></div>
		</SectionFrame>
	);
};

export default ContactSection;
