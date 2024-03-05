import { cva } from 'class-variance-authority';

const paragraphVariants = cva(['font-syne', 'text-left', 'leading-7.5', 'font-medium'], {
	variants: {
		variant: {
			body1: ['text-3.5xl', 'leading-9', 'font-semibold'],
			body2: ['text-2xl'],
			body3: ['text-lg'],
		},
	},
	defaultVariants: ['text-2xl'],
});

export default function Paragraph({ variant = 'body2', className, children, ...props }) {
	return (
		<p className={paragraphVariants({ variant, className })} {...props}>
			{children}
		</p>
	);
}
