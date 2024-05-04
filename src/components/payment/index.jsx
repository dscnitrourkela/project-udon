import { useState } from 'react';
import { PaymentCont, UPI } from './Payment';
import { Heading, Paragraph } from '../shared';
import { Contactorg, Emaildata } from '../../data/paymentData';

function Payment() {
	const [isUPI, setisUPI] = useState(true);

	return (
		<section id='payment' className='container mx-auto px-4 py-8 lg:px-0 mb-8'>
			<div className='container mx-auto px-4 py-8 lg:px-0 mb-8'>
				<Heading
					variant='h2'
					className='text-primary-yellow'
					style={{
						textShadow: '1.7px 1.7px 0px #000000',
						WebkitTextStrokeWidth: 1,
						WebkitTextStrokeColor: 'black',
					}}>
					Payment
				</Heading>
				<Paragraph variant='body3'>{Emaildata}</Paragraph>
			</div>

			<div className='container mx-auto px-4 lg:px-0'>
				<div className='border border-solid border-black p-4 w-[80vw] lg:w-1/2 mx-auto flex flex-col items-center'>
					<Heading variant='h3' className='text-center lg:my-3'>
						Payment method we have
					</Heading>
					<div className='bg-white text-black rounded-2xl border-[1.5px] border-solid border-black text-center flex flex-col lg:flex-row justify-center w-auto my-2'>
						<div className='flex justify-center space-x-4 relative  sm:w-auto '>
							<button
								className={`px-6 py-1 rounded-2xl  ${isUPI ? 'border-2 border-black bg-orange-500 text-white' : 'bg-white text-black'}`}
								onClick={() => {
									setisUPI(true);
								}}
								style={{ zIndex: 9 }}>
								{' '}
								<Paragraph variant='body3' className='text-center m-0 p-0'>
									Bank Transaction{' '}
								</Paragraph>
							</button>
							<button
								className={`px-4 py-1 rounded-2xl ${!isUPI ? 'border-2 border-black bg-orange-500 text-white' : 'bg-white text-black'}`}
								onClick={() => {
									setisUPI(false);
								}}
								style={{ zIndex: 9 }}>
								<Paragraph variant='body3' className='text-center m-0 p-0'>
									Via UPI using QR{' '}
								</Paragraph>
							</button>
						</div>
					</div>

					{isUPI ? <PaymentCont /> : <UPI />}
				</div>
			</div>

			<Heading variant='body3' className='text-primary-foreground flex justify-center my-8 px-4 italic'>
				{Contactorg}
			</Heading>
		</section>
	);
}

export default Payment;
