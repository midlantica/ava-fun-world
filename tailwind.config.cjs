/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'sans': ['Quicksand', 'sans-serif', 'ui-sans-serif', 'system-ui'],
				'serif': ['Bodoni Moda', 'ui-serif', 'Georgia'],
				'mono': ['ui-monospace', 'SFMono-Regular'],
				'display': ['Bodoni Moda'],
				'body': ['Oswald'],
			},
			colors: {
				'avaRhubarb': "#8100a8ff",
				'avaViolet': "#871fffff",
				'avaPizzazz': "#ff57eeff",
				'avaLemon': "#fffd70ff",
			},
		},
	},
	plugins: [
		require('@tailwindcss/aspect-ratio'),
	],
}