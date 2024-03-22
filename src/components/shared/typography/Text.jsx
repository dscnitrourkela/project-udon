import { cva } from 'class-variance-authority';
import { cn } from '../../../lib/utils';

const textVariants = cva(['font-syne', 'text-left', 'font-medium'], {
	variants: {
		variant: {
			button: ['font-semibold', 'text-xm', 'sm:text-xl', 'leading-6'],
			nav: ['text-xm', 'sm:text-lg', 'leading-6'],
			navButton: ['text-xm', 'sm:text-xl', 'leading-6', 'font-bold'],
			footer: ['text-xm', 'sm:text-xl', 'leading-5', 'font-prompt'],
		},
	},
});

export default function Text({ variant, className, children, ...props }) {
	return (
		<p className={cn(textVariants({ variant, className }))} {...props}>
			{children}
		</p>
	);
}
