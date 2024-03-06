import { cva } from 'class-variance-authority';
import { cn } from '../../../lib/utils';

const NavVariants = cva(['font-syne', 'text-left', 'leading-6', 'font-bold'], {
	variants: {
		variant: {
			navbutton1: ['text-xl', 'leading-6', 'font-bold'],
		},
	},
	defaultVariants: ['text-xl'],
});

export default function NavElement({ variant = 'navbutton1', className, children, ...props }) {
	return (
		<p className={cn(NavVariants({ variant, className }))} {...props}>
			{children}
		</p>
	);
}
