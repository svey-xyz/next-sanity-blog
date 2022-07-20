const colors = require('tailwindcss/colors')

module.exports = {
	content: [
		"./src/_includes/layouts/**/*.njk",
		"./src/*.njk",
		"./lib/**/*.{ts,js}"
	],
	options: {
		keyframes: true
	},
	theme: {
		screens: {
			sm: "480px",
			md: "768px",
			lg: "976px",
			xl: "1440px",
		},
		extend: {
			maxWidth: {
				'prose-full': '85ch',
				'prose': '65ch',
				'prose-short': '45ch'
			},
			padding: {
				'16/9': '56.25%',
				'header': 'var(--header-padding)'
			},
			margin: {
				'1/8': '12%',
				'1/7': '15%',
				'1/5': '20%',
				'1/4': '20%',
				'1/3': '33%'
			},
			flexGrow: {
				'2': 1,
			},
			scale: {
				'102': '1.02'
			},
			colors: {
				'primary-bg': 'var(--primary-bg)',
				'header-bg': 'var(--header-bg)',
				'opposite-bg': 'var(--opposite-bg)',
				'primary-border': 'var(--primary-border)',
				'primary-text': 'var(--primary-text)',
				'secondary-bg': 'var(--secondary-bg)',
				'primary-accent': 'var(--primary-accent)',
				'secondary-accent': 'var(--secondary-accent)',
				'medium-accent': 'var(--medium-accent)',
				// 'mixed-accent': 'mix(var(--primary-accent),  var(--secondary-accent))',


			},
			boxShadow: {
				DEFAULT: '0 0px 6px -1px rgba(0,0,0,0.1), 0 0px 5px -1px rgba(0,0,0,.06)',
				lg: '0 0px 12px -3px rgba(0,0,0,0.6), 0 0px 6px -1px rgba(0,0,0,.06)',
				xl: '0 0px 15px -5px rgba(0,0,0,0.8), 0 0px 8px -1px rgba(0,0,0,.06)',

			},
			fontFamily: {
				heading: ['DM Serif Display', 'serif'],
				body: ['Montserrat', 'sans-serif']
			},
			lineHeight: {
				'xs': '0.8'
			},
			transitionProperty: {
				'spacing': 'margin, padding',
			},
			zIndex: {
				'-1': '-1'
			},
			animation: {
				'breathing': 'bounceScale 2s linear infinite', 
			},
			keyframes: { 
				bounceScale: {
					'0%, 100%': { transform: 'scale(1)' },
					'50%': { transform: 'scale(1.2)' },
				}
			}
		}
	},
	plugins: [],
};