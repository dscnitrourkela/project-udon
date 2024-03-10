import { cva } from 'class-variance-authority';
import { cn } from '../../lib/utils';

const imgVariants = cva(['w-auto'], {
	variants: {
		size: {
			small: ['h-16'],
			medium: ['h-20'],
			large: ['h-24'],
		},
	},
	defaultVariants: {
		size: 'medium',
	},
});

export default function Logo({ className, src, alt, size, ...props }) {
	return <img className={cn(imgVariants({ size, className }), 'h-[50px] w-[50px]')} src={src} alt={alt} {...props} />;
}
