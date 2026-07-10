// src/pages/components/sections/frames/developer/DeveloperFrame.tsx

// ================== IMPORTS
import type { ReactNode } from "react";
import SectionFrame from "../shared/SectionFrame";
import { developerData } from "../../../../data/careers/developer";
import type { Theme } from "../../../../types/career";

// ================== PROPS
type DeveloperFrameProps = {
	id?: string;
	children: ReactNode;
	className?: string;
	theme: Theme;
};

// ================== DEVELOPER FRAME COMPONENT
export default function DeveloperFrame(props: DeveloperFrameProps) {
	return <SectionFrame {...props} theme={developerData.theme} />;
}
