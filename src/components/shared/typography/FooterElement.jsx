import cva from 'class-variance-authority';

const FooterElement = cva({
	size: {
		xl: 'text-xl',
	},
	leading: {
		5: 'leading-5',
	},
	color: {
		white: 'text-white',
	},
	weight: {
		500: 'font-weight: 500',
	},
	font: {
		Syne: 'font-family: Syne',
	},
});

export default FooterElement;
