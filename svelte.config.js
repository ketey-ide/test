import adapter from '@sveltejs/adapter-github-pages';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			runtime: 'nodejs16.x'
		})
	}
};

export default config;
