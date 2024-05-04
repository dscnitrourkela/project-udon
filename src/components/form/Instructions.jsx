import { Heading, Paragraph } from '../shared';
import { StepsToRegister } from '../../data/paymentData';

export const Steps = () => {
	return (
		<section className='container mx-auto px-4 py-8 lg:px-0 mb-8'>
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
					Already registered?{' '}
					<a href='#payment' className='text-primary'>
						Proceed to payment
					</a>
				</Paragraph>
			</div>
			<div className='m-4'>
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
						{StepsToRegister.map((item, index) => (
							<li key={index}>
								<Paragraph variant='body3'>
									{Array.isArray(item) ? (
										<>
											{item.map((subItem, idx) => (
												<span key={idx}>
													{subItem}
													<br />
												</span>
											))}
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
