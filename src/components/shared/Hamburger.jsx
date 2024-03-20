import { cn } from '../../lib/utils';
import { cva } from 'class-variance-authority';

const hamburgerVariants = cva(['hamburger-icon', 'flex-col'], {
	variants: {
		isOpen: {
			true: 'open',
			false: 'closed',
		},
	},
	defaultVariants: {
		isOpen: false,
	},
});

export default function Hamburger({ isOpen, onClick }) {
	return (
		<button className={cn(hamburgerVariants({ isOpen }), 'md:hidden', 'mr-[23px]', 'mt-2')} onClick={onClick}>
			<div
				id='line1'
				className='md:w-[52px] w-[44px] md:h-2 h-1 bg-black mb-2 rounded-lg border-black border-solid bg-orange-600'
				style={{
					boxShadow: '2px 2px 0px 0px #000, 3px 4px 9.2px 0px rgba(222, 222, 222, 0.48) inset',
					transition: 'transform 0.3s ease',
					transform: isOpen ? 'rotate(-46deg) translateY(19px) translateX(5px)' : 'rotate(0deg)',
				}}></div>

			<div
				id='line2'
				className='md:w-[52px] w-[44px] md:h-2 h-1 bg-black mb-2 rounded-lg border-black border-solid  bg-orange-600'
				style={{
					boxShadow: '2px 2px 0px 0px #000, 3px 4px 9.2px 0px rgba(222, 222, 222, 0.48) inset',
					transform: isOpen ? 'scaleY(0)' : 'scaleY(1)',
				}}></div>
			<div
				id='line3'
				className='md:w-[52px] w-[44px] md:h-2 h-1  bg-black rounded-lg border-black border-solid   bg-orange-600'
				style={{
					boxShadow: '2px 2px 0px 0px #000, 3px 4px 9.2px 0px rgba(222, 222, 222, 0.48) inset',
					transition: 'transform 0.3s ease',
					transform: isOpen ? 'rotate(45deg) translateY(-26px) translateX(3px)' : 'rotate(0deg)',
				}}></div>
		</button>
	);
}
