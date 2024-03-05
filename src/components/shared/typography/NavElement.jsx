import cva from 'class-variance-authority';

const NavElement = cva({
	size: {
		lg: 'text-lg',
	},
	leading: {
		9: 'leading-9',
	},
	color: {
		black: 'text-black',
	},
	weight: {
		600: 'font-weight: 600',
	},
	font: {
		Syne: 'font-family: Syne',
	},
});

export default NavElement;
