import cva from 'class-variance-authority';

const Personalised = cva({
	size: {
		base: 'text-base',
	},
	leading: {
		4: 'leading-4',
	},
	color: {
		black: 'text-black',
	},
	weight: {
		400: 'font-weight: 400',
	},
});

export default Personalised;
