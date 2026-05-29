// =====================================
// src/Components/ContactSection.tsx
// ===================================== CONTACT SECTION COMPONENT
import { useState } from "react";
import SectionFrame from "./Reusables/SectionFrame";

// =====================================
const ContactSection = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});

	const [statusMessage, setStatusMessage] = useState("");
	const [statusType, setStatusType] = useState("");
	const [isSending, setIsSending] = useState(false);

	type InputEvent = React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

	const handleChange = (e: InputEvent) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	// ================================== HANDLE SUBMIT
	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const requestId = Math.random().toString(36).substring(2, 10);
		setStatusMessage("");
		setStatusType("");
		setIsSending(true);
		try {
			const baseUrl = import.meta.env.VITE_LOCAL_API_URL;
			const url = `${baseUrl}/api/contact`;
			// ===================================== TIMEOUT HANDLING (IMPORTANT FOR RENDER)
			const controller = new AbortController();
			const timeout = setTimeout(() => {
				console.warn(`⏱️ [${requestId}] Request timeout triggered`);
				controller.abort();
			}, 15000);
			const response = await fetch(url, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(formData),
				signal: controller.signal,
			});
			clearTimeout(timeout);
			const text = await response.text();
			let data;
			try {
				data = JSON.parse(text);
			} catch {
				console.warn(`⚠️ [${requestId}] JSON parse failed`);
			}
			if (response.ok) {
				setStatusMessage(data?.message || "Success");
				setStatusType("success");
				setFormData({
					name: "",
					email: "",
					message: "",
				});
			} else {
				console.warn(`⚠️ [${requestId}] SERVER ERROR`);
				setStatusMessage(data?.message || "Server error");
				setStatusType("error");
			}
		} catch (error: unknown) {
			console.error("🔥 FETCH FAILED", error);

			if (error instanceof Error) {
				console.error("Message:", error.message);
			}

			setStatusMessage("Network error. Check connection.");
			setStatusType("error");
		}
	};

	return (
		<SectionFrame className="contactSection relative h-auto w-full flex flex-col bg-[#262628] md:bg-gradient-to-b from-[#22050c] via-[#ABE0F0] to-[#22050c] overflow-hidden">
			{/* ============================== SECTION WRAPPER */}
			<div className="serviceSection__wrapper w-full md:w-[90%] lg:w-[70%] mx-auto">
				{/* ============================== CONTENT HEADER */}
				<div className="wrapper__header font-unna text-[1.1rem] text-center mb-[5rem]">
					<h2 className="sr-only contactSection__header">Contact Me</h2>

					<h3 className="header relative inline-block font-bold">
						Let's{" "}
						<span className="text-orange-500 font-bold uppercase">connect</span>
						<span className="absolute left-1/2 -translate-x-1/2 bottom-[-0.2rem] h-[0.2rem] w-[40%] bg-red-500 rounded-full"></span>
					</h3>
				</div>

				{/* ========================= CONTACT FORM ======================== */}
				<div className="flex flex-1 flex-col justify-center items-center pb-[3rem]">
					<div className="contactSection__form md:text-[#22050c] w-full py-[1rem] mx-auto">
						<form
							className="w-full flex flex-col gap-4"
							onSubmit={handleSubmit}
						>
							{/* =========================== NAME */}
							<div className="nameParent">
								<label className="block text-orange-500 font-bold mb-2">
									Name:
								</label>
								<input
									type="text"
									name="name"
									placeholder="Your Name"
									className="w-full px-4 py-2 border-b border-red-500 rounded-[0.5rem] font-unna font-bold text-[1.1rem] bg-transparent"
									value={formData.name}
									onChange={handleChange}
									required
								/>
							</div>

							{/* =========================== EMAIL */}
							<div className="emailParent">
								<label className="block text-orange-500 font-bold mb-2">
									Email:
								</label>
								<input
									type="email"
									name="email"
									placeholder="Your Email"
									className="w-full px-4 py-2 border-b border-red-500 rounded-[0.5rem] font-unna font-bold text-[1.1rem] bg-transparent"
									value={formData.email}
									onChange={handleChange}
									required
								/>
							</div>

							{/* =========================== MESSAGE */}
							<div className="messageParent">
								<label className="block text-orange-500 font-bold mb-2">
									Message:
								</label>
								<textarea
									name="message"
									rows={5}
									placeholder="Your Message"
									className="w-full px-4 py-2 border-b border-red-500 rounded-[0.5rem] font-unna font-bold text-[1.1rem] bg-transparent"
									value={formData.message}
									onChange={handleChange}
									required
								/>
							</div>

							{/* =========================== SEND MESSAGE BUTTON */}
							<button
								type="submit"
								disabled={isSending}
								className="contactForm__submit bg-[#22050c] text-[#00ff91] font-bold hover:bg-orange-500 py-2 px-4 border-2 border-red-500 rounded-[0.5rem] transition-colors duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
							>
								{isSending ? "Sending..." : "Send Message"}
							</button>

							{/* =========================== MESSAGE STATUS */}
							{statusMessage && (
								<p
									className={`pt-[1rem] text-center text-[1rem] font-semibold font-unna ${
										statusType === "success" ? "text-green-500" : "text-red-400"
									}`}
								>
									{statusMessage}
								</p>
							)}
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
