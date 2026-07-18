// src/App.tsx

// ================== IMPORTS
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";

// ================== APP
function App() {
	return <RouterProvider router={router} />;
}

export default App;
