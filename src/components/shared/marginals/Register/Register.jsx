import { Heading } from '../..';
import Paragraph from '../../typography/Paragraph';
import { Stepstoregister } from '../../../../data/Registerdata';

export default function Register() {
	return (
		<>
			<div className='container'>
				<Heading
					variant='h1'
					className='text-primary-yellow flex justify-center '
					style={{
						textShadow: ' 2.7px 2.7px 0px #000000',
						WebkitTextStrokeWidth: 2,
						WebkitTextStrokeColor: '#252525',
					}}>
					Registration
				</Heading>
				<Heading variant='h3' className='flex flex-col justify-center items-center md:flex-row md:justify-center'>
					<span>Already registered? </span>
					<span className='text-primary-foreground'>Sign in </span>{' '}
				</Heading>
			</div>

			<div className='container mx-auto px-4 lg:px-0'>
				<Heading
					variant='h2'
					className='text-primary-yellow'
					style={{
						textShadow: '1.7px 1.7px 0px #000000',
						WebkitTextStrokeWidth: 1,
						WebkitTextStrokeColor: 'black',
					}}>
					Steps
				</Heading>

				<ul className='list-disc mx-3 my-5'>
					{Stepstoregister.map((item, index) => (
						<li key={index}>
							<Paragraph variant='body2' key={index}>
								{item}
							</Paragraph>
						</li>
					))}
				</ul>
			</div>
		</>
	);
}
