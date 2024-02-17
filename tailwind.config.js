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
			'10xl': '80px',
			'11xl': '86px',
			'12xl': '120px',
			'13xl': '48px',
			'14xl': '64px',
		},

		lineHeight: {
			3: '12px',
			3.5: '14px',
			4: '16px',
			4.5: '18px',
			5: '20px',
			5.5: '22px',
			6: '24px',
			7: '28px',
			7.5: '28.8',
			9: '36px',
			9.5: '38.4',
			10: '40px',
			11: '48px',
			12: '108px',
			13: '148px',
			14: '64px',
			15: '96px',
		},

		fontFamily: {
			Syne: ['Syne', ...defaultTheme.fontFamily.sans],
			Prompt: ['Prompt', ...defaultTheme.fontFamily.sans],
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
				},
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
