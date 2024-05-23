/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			screens: {
				'tall': { 'raw': '(max-height: 700px)' },
			},
			height: {
				'custom-calc': 'calc(100vh - 130px)', 
				'custom--calc': 'calc(100vh - 102px)' 
			}
		},
	},
	plugins: [],
}
