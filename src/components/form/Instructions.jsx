import { Heading, Paragraph } from '../shared';
import { Stepstoregister } from '../../data/paymentData';

export const Steps = () => {
	return (
		<section className=' mb-24'>
			<div className='flex flex-col justify-center items-center'>
				<Heading
					variant='h1'
					className='text-primary-yellow inline mx-auto'
					style={{
						textShadow: '4.608px 4.608px 0px #000',
						WebkitTextStrokeWidth: 1,
						WebkitTextStrokeColor: '#252525',
					}}>
					Registration
				</Heading>
				<Paragraph variant='body3' className='my-3 font-bold m-0'>
					Already registered? <span className='text-primary'>Sign In</span>
				</Paragraph>
			</div>
			<div className='m-8'>
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
				{
					<ol className='list-disc my-3 mx-8 w-[80%]'>
						{Stepstoregister.map((item, index) => (
							<li key={index}>
								<Paragraph variant='body3'>
									{index === 1 ? (
										<>
											{item[0]}
											<br />
											{item[1]}
											<br />
											{item[2]}
										</>
									) : (
										item
									)}
								</Paragraph>
							</li>
						))}
					</ol>
				}{' '}
			</div>
		</section>
	);
};
