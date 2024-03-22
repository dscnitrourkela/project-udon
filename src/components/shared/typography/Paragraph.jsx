import { cva } from 'class-variance-authority';
import { cn } from '../../../lib/utils';

const paragraphVariants = cva(['font-syne', 'text-left', 'leading-7.5', 'font-medium'], {
	variants: {
		variant: {
			body1: ['text-base', 'sm:text-3.5xl', 'leading-9', 'font-semibold'],
			body2: ['text-xs', 'sm:text-2xl'],
			body3: ['text-xs', 'sm:text-lg'],
		},
	},
	defaultVariants: ['text-xs', 'sm:text-2xl'],
});

export default function Paragraph({ variant = 'body2', className, children, ...props }) {
	return (
		<p className={cn(paragraphVariants({ variant, className }))} {...props}>
			{children}
		</p>
	);
}
