import cva from 'class-variance-authority';

const Heading1 = cva({
	size: {
		'10xl': 'text-10xl',
	},
	leading: {
		15: 'leading-15',
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

export default Heading1;
