// src/components/home/HomeSelection.tsx
// this is a component that renders the selection of careers for the home page

// ================== IMPORTS
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { homeCareerSpan } from "../reusables/animations";
import { homePageSelection } from "../../data/homePageSelection";

// ================== HOME SELECTION
const HomeSelection = () => {
	const MotionLink = motion(Link);

	return (
		<>
			{homePageSelection.map((career) => (
				<motion.div
					key={career.id}
					variants={career.variants}
					initial="hidden"
					animate="visible"
					className={`${career.className} font-bold inline-flex`}
				>
					<h2 className="text-2xl md:text-3xl lg:text-4xl group hover:text-[#00FF91]">
						<MotionLink
							to={`/careers/${career.href}`}
							className="flex items-center"
							initial="initial"
							whileHover="hover"
						>
							<motion.span
								variants={homeCareerSpan}
								className="inline-flex mr-2"
							>
								❖
							</motion.span>

							<span>{career.title}</span>
						</MotionLink>
					</h2>
				</motion.div>
			))}
		</>
	);
};

export default HomeSelection;
