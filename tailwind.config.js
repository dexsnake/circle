const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
	purge: [],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				circle: '#516AF0',
				'circle-light': '#8a94a6',
				'circle-dark': '#4A5160',
				'circle-black': '#253141'
			},
			maxWidth: {
				'screen-xl': '1140px',
				...defaultTheme.maxWidth
			},
			gridTemplateColumns: {
				'demo-3-col': '176px 1fr 176px',
				'demo-2-col': '176px 1fr'
			}
		}
	},
	variants: {
		extend: {}
	},
	plugins: []
}
