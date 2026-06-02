// =====================================
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { NavbarProvider } from "./components/Reusables/context/NavbarProvider";
// =====================================
ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<NavbarProvider>
			<App />
		</NavbarProvider>
	</React.StrictMode>,
);
