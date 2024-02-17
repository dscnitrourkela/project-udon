import cva from 'class-variance-authority';

const Heading2 = cva({
	size: {
		'2xl': 'text-2xl',
	},
	leading: {
		7.5: 'leading-7.5',
	},
	color: {
		white: 'text-white',
	},
	weight: {
		700: 'font-weight: 700',
	},
	font: {
		Syne: 'font-family: Syne',
	},
});

export default Heading2;
