import { cn } from '../../../lib/utils';

export { default as Heading } from './Heading';
export { default as Paragraph } from './Paragraph';
export { default as Text } from './Text';

export const HeroText2 = ({ children, className, ...props }) => {
	return (
		<h1 className={cn('md:text-12.5xl leading-16 font-semibold font-agoka text-left text-4.5xl', className)} {...props}>
			{children}
		</h1>
	);
};

export const HeroText1 = ({ children, className, ...props }) => {
	return (
		<h1 className={cn('md:text-12.5xl leading-16 font-semibold font-syne text-left text-4.5xl', className)} {...props}>
			{children}
		</h1>
	);
};

export const PersonalizedText = ({ children, className, ...props }) => {
	return (
		<p className={cn('text-base leading-4 font-semibol font-cassandra text-left', className)} {...props}>
			{children}
		</p>
	);
};
