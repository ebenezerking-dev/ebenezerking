// src/main.tsx

// ================== IMPORTS
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { NavbarProvider } from "./components/reusables/context/NavbarProvider";
// ================== MAIN
ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<BrowserRouter>
			<NavbarProvider>
				<App />
			</NavbarProvider>
		</BrowserRouter>
	</React.StrictMode>,
);
