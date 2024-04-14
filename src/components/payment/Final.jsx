import { useState } from 'react';
import { PaymentCont, UPI } from './Payment';
import { Heading } from '../shared';
import { Paragraph } from '../shared';
import { Contactorg } from '../../data/paymentData';
import { Emaildata } from '../../data/paymentData';

function Final() {
	const [isPayment, setIsPayment] = useState(true);

	return (
		<>
			<div className='container mx-auto px-4 lg:px-0 mb-8'>
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
				<div className='border border-solid border-black p-4 lg:w-1/2 lg:mx-auto'>
					<Heading variant='h3' className='text-center my-8 lg:my-5'>
						Payment method we have
					</Heading>
					<div className=' text-center flex flex-col lg:flex-row justify-center lg:space-x-4 mt-9'>
						<div className='flex justify-center space-x-4 mt-4 relative'>
							<button
								className={`px-4 py-2 rounded-lg border-2 border-black ${isPayment ? 'bg-orange-500 text-white' : 'bg-white text-black'}`}
								onClick={() => {
									setIsPayment(true);
								}}
								style={{ zIndex: 9 }}>
								Bank Transaction
							</button>
							<button
								className={`px-4 py-2 rounded-lg border-2 border-black ${!isPayment ? 'bg-orange-500 text-white' : 'bg-white text-black'}`}
								onClick={() => {
									setIsPayment(false);
								}}
								style={{ zIndex: 9 }}>
								Via UPI using QR
							</button>
						</div>
					</div>
					{isPayment ? <PaymentCont /> : <UPI />}
				</div>
			</div>

			<Heading variant='body3' className='text-primary-foreground flex justify-center'>
				{Contactorg}
			</Heading>
		</>
	);
}

export default Final;
