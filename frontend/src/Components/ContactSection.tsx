// =====================================
// src/Components/ContactSection.tsx
// ===================================== CONTACT SECTION COMPONENT
import nightTrain from "../Assets/backgroundImage/nightTrain.webp";
import { useState } from "react";
import PageLayout from "./Reusables/PageLayout";

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

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setStatusMessage("");
		setStatusType("");
		setIsSending(true);

		try {
			const response = await fetch(
				`${import.meta.env.VITE_API_URL}/api/contact`,
				{
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(formData),
				},
			);

			const data = await response.json();

			if (response.ok) {
				setStatusMessage(data.message);
				setStatusType("success");
				setFormData({
					name: "",
					email: "",
					message: "",
				});
			} else {
				setStatusMessage(data.message);
				setStatusType("error");
			}
		} catch (error) {
			console.error("Error:", error);
			setStatusMessage("Something went wrong. Please try again.");
			setStatusType("error");
		} finally {
			setIsSending(false);
		}
	};

	return (
		<section className="contactSection relative min-h-screen w-full md:bg-black text-[#f6f0ec] px-4 md:px-0 md:flex-grow flex flex-col overflow-hidden">
			{/* ============================== HERO IMAGE */}
			<img
				src={nightTrain}
				alt="Background"
				className="contactSection__mobile--backgroundImage md:hidden absolute inset-0 w-full h-full object-cover object-[center_30%]"
			/>

			{/* ============================== PAGE LAYOUT */}
			<PageLayout
				header={
					<div className="aboutSection__headerSubHeader text-[1.1rem] text-[#dbcfff] text-center md:text-[1rem] w-fit mx-auto bg-black/80 backdrop-blur-sm md:bg-transparent md:backdrop-blur-0 p-[0.1rem] rounded md:text-start">
						<h2 className="sr-only">About Me</h2>
						<h3 className="contactSection__subHeader">
							...here is my <span className="text-orange-500">contact</span>
						</h3>
					</div>
				}
			>
				{/* ========================= CONTACT FORM ======================== */}
				<div className="flex flex-1 flex-col justify-center items-center pb-[3rem]">
					<div className="contactSection__form text-[#dbcfff] w-full md:w-[80%] lg:w-[70%] bg-black/80 backdrop-blur-sm rounded-[1rem] px-4 py-[1rem] mx-auto">
						<form
							className="w-full flex flex-col gap-4"
							onSubmit={handleSubmit}
						>
							{/* =========================== NAME */}
							<div className="nameParent">
								<label className="block text-orange-500 mb-2">Name:</label>
								<input
									type="text"
									name="name"
									placeholder="Your Name"
									className="w-full px-4 py-2 border border-orange-500 rounded-[0.5rem] text-[1.1rem] bg-transparent md:bg-black"
									value={formData.name}
									onChange={handleChange}
									required
								/>
							</div>

							{/* =========================== EMAIL */}
							<div className="emailParent">
								<label className="block text-orange-500 mb-2">Email:</label>
								<input
									type="email"
									name="email"
									placeholder="Your Email"
									className="w-full px-4 py-2 border border-orange-500 rounded-[0.5rem] text-[1.1rem] bg-transparent md:bg-black"
									value={formData.email}
									onChange={handleChange}
									required
								/>
							</div>

							{/* =========================== MESSAGE */}
							<div className="messageParent">
								<label className="block text-orange-500 mb-2">Message:</label>
								<textarea
									name="message"
									rows={5}
									placeholder="Your Message"
									className="w-full px-4 py-2 border border-orange-500 rounded-[0.5rem] text-[1.1rem] bg-transparent md:bg-black"
									value={formData.message}
									onChange={handleChange}
									required
								/>
							</div>

							{/* =========================== SEND MESSAGE BUTTON */}
							<button
								type="submit"
								disabled={isSending}
								className="contactForm__submit bg-orange-500 text-[#450693] font-bold hover:bg-[#dbcfff] hover:text-orange-500 py-2 px-4 rounded-[0.5rem] transition-colors duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
							>
								{isSending ? "Sending..." : "Send Message"}
							</button>

							{/* =========================== MESSAGE STATUS */}
							{statusMessage && (
								<p
									className={`pt-[1rem] text-center text-[1rem] font-semibold ${
										statusType === "success" ? "text-green-500" : "text-red-400"
									}`}
								>
									{statusMessage}
								</p>
							)}
						</form>
					</div>
				</div>
			</PageLayout>

			{/* ===================== GLOWING BOTTOM DIVIDER ===================== */}
			<div className="hidden md:block pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[2px] bg-gradient-to-r from-transparent via-orange-500/70 to-transparent shadow-[0_0_12px_rgba(255,165,0,0.7)]">
				{/* Upward glow (realistic fade) */}
				<div className="absolute bottom-[4px] left-0 w-full h-[20px] bg-gradient-to-t from-orange-500/50 via-orange-500/20 to-transparent blur-[12px] opacity-80"></div>
			</div>
		</section>
	);
};

export default ContactSection;
