import { Heading, HeroText, Paragraph, PersonalizedText, Text } from '../components/shared';
import Footer from '../components/shared/marginals/footer.jsx';

import Final from '../components/shared/Register/Final.jsx';
import Register from '../components/shared/Register/Register.jsx';
import AboutUs from '../components/AboutUs.jsx';
import NavBar from '../components/shared/NavBar';

export default function Playground() {
	return (
		<>
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

			<Register />
			<Final />
			<AboutUs />
			<Footer />
		</>
	);


}
