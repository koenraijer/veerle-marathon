const defaultTheme = require('tailwindcss/defaultTheme')

const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				body: [`'PT Serif'`, ...defaultTheme.fontFamily.serif,]
			},
		},
	},

	plugins: [require('@tailwindcss/typography'), require('daisyui'), require('tailwindcss-fluid-type')],
};

module.exports = config;
