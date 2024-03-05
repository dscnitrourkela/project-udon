import { cva } from 'class-variance-authority';

const textVariants = cva(['font-syne', 'text-left', 'font-medium'], {
	variants: {
		variant: {
			button: ['font-semibold', 'text-xl', 'leading-6'],
			nav: ['text-lg', 'leading-6'],
			navButton: ['text-xl', 'leading-6', 'font-bold'],
			footer: ['text-xl', 'leading-5', 'font-prompt'],
		},
	},
});

export default function Text({ variant, className, children, ...props }) {
	return (
		<p className={textVariants({ variant, className })} {...props}>
			{children}
		</p>
	);
}
