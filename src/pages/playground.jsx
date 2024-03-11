import { Heading, HeroText, Paragraph, PersonalizedText, Text } from '../components/shared';

import Footer from '../components/shared/marginals/footer.jsx';
import FormContainer from '../components/form/FormContainer.jsx';

import NavBar from '../components/shared/NavBar';

export default function Playground() {
	return (
		<div>
			<NavBar />
			<div className='container py-6'>
				<HeroText>Hero Text</HeroText>
				<PersonalizedText>Personalized Text</PersonalizedText>
				<Heading variant='h1'>Heading 1</Heading>
				<Heading variant='h2'>Heading 2</Heading>
				<Heading variant='h3'>Heading 3</Heading>
				<Paragraph variant='body1'>Paragraph body1</Paragraph>
				<Paragraph variant='body2'>Paragraph body2</Paragraph>
				<Paragraph variant='body3'>Paragraph body3</Paragraph>
				<Text variant='button'>Text button</Text>

				<FormContainer />
				<Text variant='nav'>Text nav</Text>
				<Text variant='navButton'>Text navButton</Text>
				<Text variant='footer'>Text footer</Text>

				<Heading variant='h1' className='mt-6'>
					Colors
				</Heading>
				<ul>
					<li className='text-primary'>Primary</li>
					<li className='text-primary-foreground'>Primary Foreground</li>
					<li className='text-primary-yellow'>Primary Yellow</li>
					<li className='text-black'>Black</li>
					<li className='text-black-foreground'>Black Foreground</li>
				</ul>
			</div>
			<Footer />
		</div>
	);
}
