// src/components/sections/developer/ContactSection.tsx
// ================== IMPORTS
import { useState } from "react";
import CareerSectionFrame from "../frames/shared/CareerSectionFrame";
import { useToast } from "../../../hooks/useToast";
import { Toast } from "../../ui/Toast";
import { LiquidButton } from "../../ui/LiquidButton";
import { motion, AnimatePresence } from "framer-motion";
import type { Contact, Theme } from "../../../types/career";
import {
	viewportRepeat,
	developer,
	header,
	headerUnderline,
	formContainer,
	formField,
	formSubmitButton,
	contactToast,
	bottomDivider,
} from "../../reusables/animations/developerSc";

// ================== PROPS
type ContactSectionProps = {
	contact: Contact;
	career: string;
	theme: Theme;
};

// ================== STATE TYPES
type FormState = {
	name: string;
	email: string;
	message: string;
};

type Status = "idle" | "loading" | "success" | "error";

// ================== CONTACT SECTION
const ContactSection = ({ contact, career, theme }: ContactSectionProps) => {
	const [formData, setFormData] = useState<FormState>({
		name: "",
		email: "",
		message: "",
	});

	const [status, setStatus] = useState<Status>("idle");

	const { toast, showToast } = useToast();

	// ================== HANDLE CHANGE
	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		setFormData((prev) => ({
			...prev,
			[e.target.name]: e.target.value,
		}));
	};

	// ================== HANDLE VALIDATION
	const validate = () => {
		if (!formData.name.trim()) return "Name is required";
		if (!formData.email.includes("@")) return "Valid email required";
		if (!formData.message.trim()) return "Message is required";
		if (formData.message.trim().length < 10)
			return "Message must be at least 10 characters";
		return null;
	};

	// ================== HANDLE SUBMIT
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
				body: JSON.stringify({
					...formData,
					career,
				}),
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
		<CareerSectionFrame id="contact" theme={theme}>
			<motion.div
				variants={developer}
				initial="hidden"
				whileInView="visible"
				viewport={viewportRepeat}
				className="parent relative h-auto w-full flex flex-col overflow-hidden"
			>
				{/* ============================== CONTACT WRAPPER */}
				<motion.div className="wrapper w-full md:w-[90%] lg:w-[70%] mx-auto">
					{/* =========================== CONTACT TOAST */}
					<AnimatePresence>
						{toast && (
							<motion.div
								variants={contactToast}
								initial="hidden"
								animate="visible"
								exit="hidden"
								className="toast fixed top-4 right-4 z-50"
							>
								<Toast message={toast.message} type={toast.type} />
							</motion.div>
						)}
					</AnimatePresence>

					{/* =========================== CONTACT HEADER */}
					<motion.div
						variants={header}
						initial="hidden"
						whileInView="visible"
						viewport={viewportRepeat}
						className="header text-left px-4"
					>
						<div className="inline-block uppercase font-unna font-bold text-[1rem] mb-56 bg-[#000000] p-3 rounded-2xl">
							<h2 className="sr-only contactSection__header">Contact</h2>
							<h3 className="relative inline-block">
								Let's connect.
								<motion.span
									variants={headerUnderline}
									initial="hidden"
									whileInView="visible"
									viewport={viewportRepeat}
									className="absolute left-1/2 -translate-x-1/2 bottom-[-0.2rem] h-[0.2rem] w-[40%] bg-red-500 rounded-full"
								/>
							</h3>
						</div>
					</motion.div>

					{/* =========================== CONTACT BODY */}
					<div className="body px-4 mb-6 text-center">
						<p className="text-lg">
							<a
								href={`mailto:${contact.email}`}
								className="text-orange-500 hover:underline"
							>
								{contact.email}
							</a>
						</p>
					</div>

					{/* ========================= CONTACT FORM WRAPPER ======================== */}
					<motion.div
						variants={formContainer}
						initial="hidden"
						whileInView="visible"
						viewport={viewportRepeat}
						className="form__wrapper flex flex-1 flex-col justify-center items-center px-2 pb-20"
					>
						<motion.div className="w-full py-4 mx-auto">
							{/* =========================== FORM */}
							<form
								onSubmit={handleSubmit}
								className="form flex flex-col gap-4 text-lg"
							>
								{/* =========================== NAME FIELD */}
								<motion.div
									variants={formField}
									initial="hidden"
									whileInView="visible"
									viewport={viewportRepeat}
								>
									<input
										type="text"
										name="name"
										placeholder="Your Name"
										className="w-full px-4 py-2 border-b border-[#000AFD]/80 rounded-lg bg-transparent placeholder:text-white placeholder:opacity-80 focus:outline-none focus:border-orange-500 transition-colors duration-300"
										value={formData.name}
										onChange={handleChange}
										required
									/>
								</motion.div>

								{/* =========================== EMAIL FIELD */}
								<motion.div
									variants={formField}
									initial="hidden"
									whileInView="visible"
									viewport={viewportRepeat}
								>
									<input
										type="email"
										name="email"
										placeholder="Your Email"
										className="w-full px-4 py-2 border-b border-[#000AFD]/80 rounded-lg bg-transparent placeholder:text-white placeholder:opacity-80 focus:outline-none focus:border-orange-500 transition-colors duration-300"
										value={formData.email}
										onChange={handleChange}
										required
									/>
								</motion.div>

								{/* =========================== MESSAGE FIELD */}
								<motion.div
									variants={formField}
									initial="hidden"
									whileInView="visible"
									viewport={viewportRepeat}
								>
									<textarea
										name="message"
										rows={4}
										placeholder="Your Message"
										className="w-full px-4 py-2 border-b border-[#000AFD]/80 rounded-lg bg-transparent placeholder:text-white placeholder:opacity-80 focus:outline-none focus:border-orange-500 transition-colors duration-300 resize-none"
										value={formData.message}
										onChange={handleChange}
										required
									/>
								</motion.div>

								{/* SUBMIT BUTTON */}
								<motion.div variants={formSubmitButton}>
									<LiquidButton status={status}>Send Message</LiquidButton>
								</motion.div>
							</form>
						</motion.div>
					</motion.div>
				</motion.div>

				{/* ===================== GLOWING BOTTOM DIVIDER ===================== */}
				<motion.div
					variants={bottomDivider}
					initial="hidden"
					whileInView="visible"
					viewport={viewportRepeat}
					className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-0.5 bg-linear-to-r from-transparent via-orange-500 to-transparent origin-left"
				/>
			</motion.div>
		</CareerSectionFrame>
	);
};

export default ContactSection;
