import cva from 'class-variance-authority';

const body1Variants = cva({
	size: {
		'3.5xl': 'text-3.5xl',
	},
	leading: {
		7: 'leading-7',
	},
});

export default function Body1({ children, size, leading }) {
	return <div className={body1Variants({ size, leading })}>{children}</div>;
}
