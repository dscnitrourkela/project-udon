import cva from 'class-variance-authority';

const Button = cva({
	size: {
		xl: 'text-xl',
	},
	leading: {
		6: 'leading-6',
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

export default Button;
