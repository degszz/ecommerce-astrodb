/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			height: {
				'custom-calc': 'calc(100vh - 130px)',
				'custom--calc': 'calc(100vh - 102px)',
				'customice-calc': 'calc(100vh - 65px)'

			},
			colors: {
				'hueso': {
					'100': '#f1ede3',
					'200': '#e3dac9',
					'fondo': '#cfbea2',
					'400': '#bb9f7c',
					'500': '#ac8a63',
					'600': '#9f7957',
					'700': '#856249',
					'800': '#6c5040',
					'900': '#584336',
					'950': '#2f211b',
				},

			}
		},
	},
	plugins: [],
}
