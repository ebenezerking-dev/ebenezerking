// =====================================
// KEEP RENDER AWAKE AI AGENT
// =====================================

export default {
	async scheduled(event, env, ctx) {
		const url = 'https://kingv2.onrender.com/api/health';

		const controller = new AbortController();
		const timeout = setTimeout(() => controller.abort(), 8000);

		try {
			const res = await fetch(url, {
				signal: controller.signal,
			});

			clearTimeout(timeout);

			if (!res.ok) {
				console.error('Ping failed:', res.status);
				return;
			}

			const data = await res.text();
			console.log('Ping OK:', res.status, data);
		} catch (err) {
			console.error('Ping error:', err);
		}
	},
};
