import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter({
			fallback: 'loading.html',
		}),
		alias: {
			'$components': "src/components",
			'$assets': 'src/assets',
		},
	},
};

export default config;
