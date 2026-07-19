// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
	plugins: [react(), tailwindcss()],
	build: {
		rollupOptions: {
			output: {
				manualChunks: {
					// Split React and React DOM into their own chunk
					"react-vendor": ["react", "react-dom", "react-router-dom"],
					// Split animation libraries
					"animation-vendor": ["framer-motion"],
					// Split UI libraries
					"ui-vendor": ["react-icons"],
				},
				// Alternative: More dynamic approach (uncomment if needed)
				// manualChunks(id) {
				// 	if (id.includes('node_modules')) {
				// 		// React ecosystem
				// 		if (id.includes('react') || id.includes('react-dom') || id.includes('react-router')) {
				// 			return 'react-vendor';
				// 		}
				// 		// Animation libraries
				// 		if (id.includes('framer-motion')) {
				// 			return 'animation-vendor';
				// 		}
				// 		// UI libraries
				// 		if (id.includes('react-icons')) {
				// 			return 'ui-vendor';
				// 		}
				// 		// Everything else from node_modules
				// 		return 'vendor';
				// 	}
				// },
			},
		},
		// Increase warning limit to 1000KB (optional)
		chunkSizeWarningLimit: 1000,
	},
});
