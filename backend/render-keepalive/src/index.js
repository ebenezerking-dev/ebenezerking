// =====================================
// KEEP RENDER AWAKE AI AGENT
// =====================================

export default {
	async scheduled(event, env, ctx) {
		const url = 'https://your-portfolio-api.onrender.com/api/health';

		try {
			const res = await fetch(url);
			console.log('Ping:', res.status);
		} catch (err) {
			console.error('Ping failed:', err);
		}
	},
};
