/** @type {import('tailwindcss').Config} */
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
		extend: {
			
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))',
				},
				
				colors: {
					'color-primary': 'var(--baground-primary)',
					'color-secondary': 'var(--text-color-secondary)',
					'primary-yellow' : 'var(--accent-color-primary)',
					'stroke-black-1': 'var(--text-color-primary)',
					'stroke-black-2': 'var(--text-color-secondary)',

					'btn-primary': 'var(--button-color-primary)',
				  },
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 8px)',
				sm: 'calc(var(--radius) - 10px)',
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
