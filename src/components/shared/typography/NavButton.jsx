import { cva } from 'class-variance-authority';
import { cn } from '../../../lib/utils';

const NavVariants = cva(['font-syne', 'text-left', 'leading-5.3', 'font-semibold'], {
	variants: {
		variant: {
			nav1: ['text-lg', 'leading-5.3', 'font-semibold'],
		},
	},
	defaultVariants: ['text-lg'],
});

export default function NavButton({ variant = 'nav1', className, children, ...props }) {
	return (
		<p className={cn(NavVariants({ variant, className }))} {...props}>
			{children}
		</p>
	);
}
