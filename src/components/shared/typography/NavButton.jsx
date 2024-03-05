import cva from 'class-variance-authority';

const NavButton = cva({
	size: {
		xl: 'text-xl',
	},
	leading: {
		6: 'leading-6',
	},
	color: {
		black: 'text-black',
	},
	weight: {
		700: 'font-weight: 700',
	},
	font: {
		Syne: 'font-family: Syne',
	},
});

export default NavButton;
