// src/App.tsx

// ================== IMPORTS
import "./index.css";
import { Routes, Route } from "react-router-dom";
import HomePageLayout from "./components/layouts/HomePageLayout";
import OtherPagesLayout from "./components/layouts/OtherPagesLayout";
import HomePage from "./pages/HomePage";
import CareerPage from "./pages/CareerPage";
// ================== APP
function App() {
	return (
		<Routes>
			{/* MAIN ROUTES */}
			<Route element={<HomePageLayout />}>
				<Route path="/" element={<HomePage />} />
			</Route>
			{/* OTHER PAGES ROUTES */}
			<Route element={<OtherPagesLayout />}>
				<Route path="/careers/:career" element={<CareerPage />} />
			</Route>
		</Routes>
	);
}

export default App;
