import { cva } from 'class-variance-authority';
import { cn } from '../../../lib/utils';

const headingVariants = cva(['font-syne', 'font-bold', 'text-left', 'leading-7.5'], {
	variants: {
		variant: {
			h1: ['text-10xl', 'leading-15'],
			h2: ['text-3.5xl'],
			h3: ['text-2xl'],
		},
	},
});

export default function Heading({ variant = 'h1', className, children, ...props }) {
	const Tag = variant;
	return (
		<Tag className={cn(headingVariants({ variant, className }))} {...props}>
			{children}
		</Tag>
	);
}
