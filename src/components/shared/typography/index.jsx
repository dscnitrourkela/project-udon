import { cn } from '../../../lib/utils';

export { default as Heading } from './Heading';
export { default as Paragraph } from './Paragraph';
export { default as Text } from './Text';

export const HeroText = ({ children, className, ...props }) => {
	return (
		<h1 className={cn('text-12.5xl leading-16 font-semibold font-agoka text-left', className)} {...props}>
			{children}
		</h1>
	);
};

export const PersonalizedText = ({ children, className, ...props }) => {
	return (
		<p className={cn('text-base leading-4 font-semibold font-cassandra text-left', className)} {...props}>
			{children}
		</p>
	);
};
