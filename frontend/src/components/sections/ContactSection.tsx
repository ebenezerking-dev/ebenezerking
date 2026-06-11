// =====================================
// CONTACT SECTION
// src/components/sections/ContactSection.tsx
// =====================================
import { useState } from "react";
import SectionFrame from "../reusables/SectionFrame";
import { useToast } from "../../hooks/useToast";
import { Toast } from "../ui/Toast";
import { LiquidButton } from "../ui/LiquidButton";
import { motion, AnimatePresence } from "framer-motion";
import {
	containerVariants,
	headerVariants,
	underlineVariants,
	dividerVariants,
	viewportRepeat,
	fadeInUpVariants,
	formContainerVariants,
	formFieldVariants,
	formButtonVariants,
	toastVariants,
} from "../reusables/animations/sectionAnimations";

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
		<SectionFrame>
			<motion.div
				initial="hidden"
				whileInView="visible"
				viewport={viewportRepeat}
				className="contactSection relative h-auto w-full flex flex-col overflow-hidden"
			>
				<motion.div
					variants={containerVariants}
					className="serviceSection__wrapper w-full md:w-[90%] lg:w-[70%] mx-auto"
				>
					{/* =========================== TOAST */}
					<AnimatePresence>
						{toast && (
							<motion.div
								variants={toastVariants}
								initial="hidden"
								animate="visible"
								exit="hidden"
								className="fixed top-4 right-4 z-50"
							>
								<Toast message={toast.message} type={toast.type} />
							</motion.div>
						)}
					</AnimatePresence>

					{/* =========================== HEADER */}
					<motion.div variants={headerVariants} className="text-left">
						<div className="wrapper__header inline-block uppercase font-unna font-bold text-[1rem] mb-[14rem] bg-[#000000] p-3 rounded-[1rem]">
							<h3 className="header relative inline-block">
								Let's connect.
								<motion.span
									variants={underlineVariants}
									initial="hidden"
									whileInView="visible"
									viewport={viewportRepeat}
									className="absolute left-1/2 -translate-x-1/2 bottom-[-0.2rem] h-[0.2rem] w-[40%] bg-red-500 rounded-full"
								/>
							</h3>
						</div>
					</motion.div>

					{/* ========================= CONTACT FORM ======================== */}
					<motion.div
						variants={fadeInUpVariants}
						className="flex flex-1 flex-col justify-center items-center pb-[5rem]"
					>
						<motion.div
							variants={formContainerVariants}
							initial="hidden"
							whileInView="visible"
							viewport={viewportRepeat}
							className="form__wrapper w-full py-[1rem] mx-auto"
						>
							{/* =========================== FORM */}
							<form
								onSubmit={handleSubmit}
								className="flex flex-col gap-4 text-lg"
							>
								{/* NAME FIELD */}
								<motion.div variants={formFieldVariants}>
									<input
										type="text"
										name="name"
										placeholder="Your Name"
										className="w-full px-4 py-2 border-b border-[#000AFD]/80 rounded-[0.5rem] bg-transparent placeholder:text-white placeholder:opacity-80 focus:outline-none focus:border-orange-500 transition-colors duration-300"
										value={formData.name}
										onChange={handleChange}
										required
									/>
								</motion.div>

								{/* EMAIL FIELD */}
								<motion.div variants={formFieldVariants}>
									<input
										type="email"
										name="email"
										placeholder="Your Email"
										className="w-full px-4 py-2 border-b border-[#000AFD]/80 rounded-[0.5rem] bg-transparent placeholder:text-white placeholder:opacity-80 focus:outline-none focus:border-orange-500 transition-colors duration-300"
										value={formData.email}
										onChange={handleChange}
										required
									/>
								</motion.div>

								{/* MESSAGE FIELD */}
								<motion.div variants={formFieldVariants}>
									<textarea
										name="message"
										rows={4}
										placeholder="Your Message"
										className="w-full px-4 py-2 border-b border-[#000AFD]/80 rounded-[0.5rem] bg-transparent placeholder:text-white placeholder:opacity-80 focus:outline-none focus:border-orange-500 transition-colors duration-300 resize-none"
										value={formData.message}
										onChange={handleChange}
										required
									/>
								</motion.div>

								{/* SUBMIT BUTTON */}
								<motion.div variants={formButtonVariants}>
									<LiquidButton status={status}>Send Message</LiquidButton>
								</motion.div>
							</form>
						</motion.div>
					</motion.div>
				</motion.div>

				{/* ===================== GLOWING BOTTOM DIVIDER ===================== */}
				<motion.div
					variants={dividerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={viewportRepeat}
					className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[2px] bg-gradient-to-r from-transparent via-orange-500 to-transparent origin-left"
				/>
			</motion.div>
		</SectionFrame>
	);
};

export default ContactSection;
