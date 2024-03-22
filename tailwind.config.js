/** @type {import('tailwindcss').Config} */

import defaultTheme from 'tailwindcss/defaultTheme';

export default {
	darkMode: ['class'],
	content: ['./src/pages/**/*.{js,jsx}', './src/components/**/*.{js,jsx}', './src/app/**/*.{js,jsx}'],
	prefix: '',
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px',
			},
		},

		fontSize: {
			xm: ['10px', '12px'],
			xs: '12px',
			sm: '14px',
			base: '16px',
			lg: '18px',
			xl: '20px',
			'2xl': '24px',
			'3xl': '30px',
			'3.5xl': '32px',
			'4xl': '36px',
			'4.5xl': '40px',
			'10xl': '48px',
			'11xl': '64px',
			'12xl': '72px',
			'12.5xl': '75px',
			'13xl': '80px',
			'14xl': '96px',
		},

		lineHeight: {
			3: '12px',
			3.5: '14px',
			4: '16px',
			4.5: '18px',
			5: '20px',
			5.3: '21.6px',
			5.5: '22px',
			6: '24px',
			7: '28px',
			7.5: '30px',
			9: '36px',
			9.5: '38.4',
			10: '40px',
			11: '48px',
			12: '56px',
			13: '64px',
			14: '72px',
			15: '96px',
			16: '105px',
		},
		fontFamily: {
			// use in tailwind as font-syne
			syne: ['Syne', ...defaultTheme.fontFamily.sans],
			prompt: ['Prompt', ...defaultTheme.fontFamily.sans],
			agoka: ['Agoka', ...defaultTheme.fontFamily.sans],
			cassandra: ['Cassandra', ...defaultTheme.fontFamily.sans],
		},
		extend: {
			boxShadow: {
				'3xl': '2px 3px 0px 0px #000',
			},
			colors: {
				/** Design System Starts */
				primary: {
					DEFAULT: 'var(--primary)',
					foreground: 'var(--primary-foreground)',
					yellow: 'var(--primary-yellow)',
				},
				background: 'var(--background)',
				black: {
					DEFAULT: 'var(--black)',
					foreground: 'var(--black-foreground)',
				},

				/** Design System Ends */

				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))',
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))',
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))',
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))',
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))',
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))',
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
			},
			boxShadow: {
				subheading: '1px 1px 0px 0px #F9F9F9',
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
			},
		},
	},
	plugins: [],
};
